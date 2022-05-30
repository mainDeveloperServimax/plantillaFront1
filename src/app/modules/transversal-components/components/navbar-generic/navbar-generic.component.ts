import { filter } from 'rxjs/operators';
import { getViewport } from './../../../../shared/functions/screenSize.functions';
import { UserDataAdmin } from './../../../../shared/DTOs/user.dto';
import { IUserDataAdmin } from './../../../../services/internal/storage/interfaces/userDataAdmin';
import { PermissionOverScreens } from './../../../../security/permissionOverScreens';
import { RoutesApp } from '../../../../constants/routes-app.constants';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteNavbarInfo } from 'src/app/shared/interfaces/routerNavbar';
import { StorageService } from 'src/app/services/internal/storage/storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LABELS } from 'src/app/constants/labels.constans';

@Component({
  selector: 'app-navbar-generic',
  templateUrl: './navbar-generic.component.html',
  styleUrls: ['./navbar-generic.component.scss']
})
export class NavbarGenericComponent implements OnInit {
  @Input() public menuItems: RouteNavbarInfo[] = [];
  public LABELS = LABELS;
  public selectRoleForm: FormGroup;
  public roles: {
    id: number;
    name: string;
}[] = [];
  public  user: UserDataAdmin;
 public currentRolName: string;
  constructor(
    private router: Router,
    private permissionOverScreen: PermissionOverScreens,
    private storageService: StorageService,
    private fb: FormBuilder,
  ) { }


  ngOnInit(): void {
    this.initForm();
    this.getRoles();
  }

  private initForm() {
    const currentRole = this.storageService.getStorageElement({ space: 'Session', typeElement: 'currentRole' }) || 0;
    this.user = this.storageService.getStorageElement({ space: 'Session', typeElement: 'user' });
    this.selectRoleForm = this.fb.group({
      currentRole: currentRole
    });
    this.selectRoleForm.valueChanges.subscribe(
      (newValue) => {
        const newRole = Number(newValue.currentRole);
        const redirectTo = this.permissionOverScreen.mainRedirectionByRole(newRole);
        this.changeRole(newRole);
        if (redirectTo) {
          this.router.navigate(redirectTo);
        }
      }
    );
  }

  public goToHome(): void {
    this.router.navigate(RoutesApp.URL_OUTLETS.login.goLogin);
  }

  public goToScreen(route): void {
    this.router.navigate(route);
    this.closeNav();
    //const screenSize = getViewport();
    /* if (screenSize === 'xs' || screenSize === 'md') {
      document.getElementById("GeneralToogle").click();
      this.closeNav();
    } */

  }

  public hideElementScreen(finalUrl: string): boolean {
    return finalUrl && !this.permissionOverScreen.havePermissionOverScreen(finalUrl);
  }
  public getRoles(): void {
    const userData = this.storageService.getStorageElement({ space: 'Session', typeElement: 'user' }) as UserDataAdmin;
    this.roles = userData.roles;
  }

  public closeSession(): void {
    this.storageService.cleanAll('Session');
    this.storageService.cleanAll('Local');
    this.router.navigate(RoutesApp.URL_OUTLETS.login.goLogin);
  }
  private changeRole(currentRole: number): void {
    this.storageService.saveStorageElement({ space: 'Session', typeElement: 'currentRole', element: currentRole });
  }
  public openNav(): void {
    document.getElementById("mySidebar").style.width = "19em";
    //document.getElementById("mySidebar").style.display = "block";
    /*  document.getElementById("main").style.marginLeft = "250px"; */
  }

  public closeNav(): void {
    document.getElementById("mySidebar").style.width = "0%";
    //document.getElementById("mySidebar").style.display = "none";
    /*  document.getElementById("main").style.marginLeft= "0"; */
  }
  public toogleChild(idChild: string, lengthChild: number): void {
    const a = document.getElementById('_' + idChild);
    if(a.style.height === "" || a.style.height === "0px"){
      a.style.height = `${lengthChild*40}px`;
    }else
    {
     a.style.height = "0px";
    }

  }

  public buttonPrincipal(item: RouteNavbarInfo): void{
    if(item.children){
      this.toogleChild(item.id, item.children.length);
    }else{
      this.goToScreen(item.path);
    }

  }

}


