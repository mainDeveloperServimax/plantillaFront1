import { RoutesApp } from './constants/routes-app.constants';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: RoutesApp.ROUTES.login.main },
  { path: RoutesApp.ROUTES.login.main, loadChildren: () => import('./modules/Login/login.module').then(m => m.LoginModule) },
  { path: RoutesApp.ROUTES.deliever.main,  loadChildren: () => import('./modules/deliever/deliever.module').then(m => m.DelieverModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
