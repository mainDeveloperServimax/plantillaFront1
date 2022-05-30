import { LiveOperationComponent } from './components/driver-news/components/live-operation/live-operation.component';
import { BillingComponent } from '../deliever/components/driver-news/components/billing/billing.component';

import { CanActivateToken } from './../../security/canActivateToken';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesApp } from 'src/app/constants/routes-app.constants';
import { DriverNewsComponent } from './components/driver-news/driver-news.component';
import { DelieverComponent } from './deliever.component';
import { PickingDriversComponent } from './components/driver-news/components/picking-drivers/picking-drivers.component';
import { DriversComponent } from './components/driver-news/components/drivers/drivers.component';
import { NoveltyProductsComponent } from './components/driver-news/components/novelty-products/novelty-products.component';

const routes: Routes = [
  {
    path: '',
    component: DelieverComponent,
    children: [
      {
        path: RoutesApp.ROUTES.deliever.main,
        children: [
          {
            path: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.main,
            component: DriverNewsComponent,
            outlet: RoutesApp.OUTLETS.deliever,
            canActivate: [CanActivateToken],
            children: [
              {
                path: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.billing,
                  component: BillingComponent,
                  canActivate: [CanActivateToken]
              },
              {
                path: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.pickingDrivers,
                component: PickingDriversComponent,
                canActivate: [CanActivateToken]
              },
              {
                path: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.liveOperation,
                component: LiveOperationComponent,
                canActivate: [CanActivateToken]
              },
              {
                path: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.liquidationReview,
                component: BillingComponent,
                canActivate: [CanActivateToken]
              },
              {
                path: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.driver,
                component: DriversComponent,
                canActivate: [CanActivateToken]
              },
              {
                path: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.novelty,
                component: NoveltyProductsComponent,
                canActivate: [CanActivateToken]
              }
            ],
          },
        ],
      },
   ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelieverRoutingModule { }
