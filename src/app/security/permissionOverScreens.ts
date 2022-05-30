import { Router } from '@angular/router';
import { MAIN_REDIRECTIONS_BY_ROLE } from './../constants/mainRedirections.constans';
import { UserDataAdmin } from './../shared/DTOs/user.dto';
import { SCREENS_CODES_PERMISSION } from './../constants/routes-screen-code.constants';
import { Injectable } from "@angular/core";
import { StorageService } from "../services/internal/storage/storage.service";

@Injectable()
export class PermissionOverScreens {

    constructor(
        private storageService: StorageService,
    ) { }

    public havePermissionOverScreen(url: string): boolean {
        const screenCode = SCREENS_CODES_PERMISSION[url];
        const dataUser = this.storageService.getStorageElement({ space: 'Session', typeElement: 'user' }) as UserDataAdmin;
        const currentRole = this.storageService.getStorageElement({ space: 'Session', typeElement: 'currentRole' }) as number;
        if (!screenCode || !dataUser || !currentRole) {
            return false;
        }
        const permissionOfRole = dataUser.permissions.filter(per => per.roleId.includes(currentRole));
        return permissionOfRole.map(per => per.code).includes(screenCode);
    }
    public mainRedirectionByRole(roleId: number): any {
        return MAIN_REDIRECTIONS_BY_ROLE[roleId];
    }


}