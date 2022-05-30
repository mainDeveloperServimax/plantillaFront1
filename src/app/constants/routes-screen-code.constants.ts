import { RoutesApp } from './routes-app.constants';

export const SCREENS_CODES_PERMISSION = {
    /* APP DELIEVER MODULE */

    [RoutesApp.ROUTES.deliever.main]: 'DELIVER_VIEW',
    [RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.billing]: 'BILL_PREV_OUT',
    [RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.pickingDrivers]: 'ADM_ABKO_PICK_APPROV',
    [RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.liveOperation]: 'DELIVER_LIVE_VIEW',
    [RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.driver]: 'ADM_ABKO_PICK_APPROV',
    [RoutesApp.ROUTES.deliever.children.DriverNewsComponent.children.novelty]: 'ADM_ABKO_PICK_APPROV'
}
