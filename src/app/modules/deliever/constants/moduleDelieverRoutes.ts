import { LABELS } from 'src/app/constants/labels.constans';
import { DelieverComponent } from './../deliever.component';
import { RoutesApp } from '../../../constants/routes-app.constants';
import { RouteNavbarInfo } from "src/app/shared/interfaces/routerNavbar";

export const MODULE_DELIEVER_ROUTES: RouteNavbarInfo[] = [
  {
    id: "Del",
    path: RoutesApp.URL_OUTLETS.deliever.goDelieverNewsComponent.main,
    title: 'Módulo de entrega',
    icon: 'bi bi-briefcase-fill',
    class: '',
    finalUrl: RoutesApp.ROUTES.deliever.main,
    children: [
    //   {
    //     title: "Picking",
    //     path: RoutesApp.URL_OUTLETS.deliever.goDelieverNewsComponent.children.goPickingDrivers,
    //     finalUrl: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.pickingDrivers
    // },
    {
        title: LABELS.liquidation,
        path: RoutesApp.URL_OUTLETS.deliever.goDelieverNewsComponent.children.goBilling,
        finalUrl: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.billing
    },
    {

      title: LABELS.liveOperation,
      path: RoutesApp.URL_OUTLETS.deliever.goDelieverNewsComponent.children.goLiveOperation,
      finalUrl: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.liveOperation
    },
    {
      title: LABELS.liquidationReview,
      path: RoutesApp.URL_OUTLETS.deliever.goDelieverNewsComponent.children.goliquidationReview,
      finalUrl: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.liquidationReview
    },
    {
      title: LABELS.driver,
      path: RoutesApp.URL_OUTLETS.deliever.goDelieverNewsComponent.children.goDriver,
      finalUrl: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.driver
    },
    {
      title: 'Novedaedes',
      path: RoutesApp.URL_OUTLETS.deliever.goDelieverNewsComponent.children.goNovelty,
      finalUrl: RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.novelty
    },
   ]
  }
];
