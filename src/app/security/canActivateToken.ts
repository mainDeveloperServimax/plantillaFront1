import { ToastService } from './../services/internal/toast.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { StorageService } from "../services/internal/storage/storage.service";
import { LoginService } from "../services/login.service";

@Injectable()
export class CanActivateToken implements CanActivate {
    static timePrevTokenValidate: Date = null;

    private validateToken: boolean = false;
    constructor(
        private loginService: LoginService,
        private storageService: StorageService,
        private router: Router,
        private toastService: ToastService
    ) { }

    async canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        this.validateToken = false;
        const token = this.storageService.getStorageElement({ typeElement: 'user', space: 'Session' })?.token;
        if (token) {
            if (!CanActivateToken.timePrevTokenValidate) {
                this.validateToken = true;
            } else {
                const dif = CanActivateToken.timePrevTokenValidate.getTime() - new Date().getTime();
                var hours = Math.abs(dif) / 36e5;
                this.validateToken = hours > 1;
            }
            if (this.validateToken) {
                try {
                    const validRoute = await this.loginService.validateToken(token).toPromise();
                    CanActivateToken.timePrevTokenValidate = new Date();
                    if (!validRoute) {
                        this.router.navigateByUrl('');
                        return false
                    }
                    return validRoute;
                } catch (error) {
                    CanActivateToken.timePrevTokenValidate = null;
                    this.router.navigateByUrl('');
                    this.toastService.openToast({
                        type: 'Info',
                        title: 'Sesión expirada',
                        msg: 'Su Sesión ha expirado, por favor, ingrese nuevamente'
                    });

                }
            }
            return true;
        } else {
            this.router.navigateByUrl('');
            return false
        }
    }
}