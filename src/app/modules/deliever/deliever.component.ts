import { StorageService } from './../../services/internal/storage/storage.service';
import { RoutesApp } from './../../constants/routes-app.constants';
import { Component, OnInit } from '@angular/core';
import { RouteNavbarInfo } from 'src/app/shared/interfaces/routerNavbar';
import { Router } from '@angular/router';
import { MODULE_DELIEVER_ROUTES } from './constants/moduleDelieverRoutes';

@Component({
  selector: 'app-deliever',
  templateUrl: './deliever.component.html',
  styleUrls: ['./deliever.component.scss']
})
export class DelieverComponent implements OnInit {
  public menuItems: RouteNavbarInfo[];
  private currentRole = 0;
  constructor(
    private router: Router,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.getNoveltyProducts();
    this.currentRole = this.storageService.getStorageElement({ space: 'Session', typeElement: 'currentRole' });
    //this.router.navigate(RoutesApp.URL_OUTLETS.deliever.goDelieverNewsComponent.main);
    this.menuItems = MODULE_DELIEVER_ROUTES;
  }

  private getNoveltyProducts() {
    if(this.currentRole === 7) {
      this.router.navigate(RoutesApp.URL_OUTLETS.deliever.goDelieverNewsComponent.children.goNovelty);
    }
  }

}
