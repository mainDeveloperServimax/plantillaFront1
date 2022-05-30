import { DeliverTypeEnum } from "../enums/deliverType.enum";
import { HomologationCodeTransactionType } from "../enums/homologationCodeTransactionType.enum";
import { OrderTypeEnum } from "../enums/orderType.enum";
import { IClientRouteDeliver } from "./servimaxAbakoDtos/routesClient";

export interface IRouteOrderDto {
    idBussinessResponsable: number;
    distanceDifference: number;
    timeDifference: number;
    deliverType: DeliverTypeEnum;
    extraCodes: IHomologateTransactionCode[];
    selectedRouted?: any;
    observation: string;
}

export interface IHomologateTransactionCode {
    value: string;
    type: HomologationCodeTransactionType;
}

export interface IOrderToRouted {
    numPlanilla: number,
    orderCode: number;
    billCode: number;
    clientName: string;
    comerceName: string;
    sellerName: string;
    clientCode: number;
    carCode: number;
    driverChoiced: string;
    driverConfirm: string;
    address: string;
    lat: number;
    lng: number;
    sameDriver: boolean;
    codeResponsable: number;
    distanceDifference: number;
    timeDifference: number;
    deliverType: DeliverTypeEnum;
    price: number;
    route?: any;
    observation?: string;
    orderType: OrderTypeEnum;
    phone: string;
    deliverDate: Date;
    clientRoute: IClientRouteDeliver[];
    identificationClient: string;
}

export interface IResponsableBaseData {
    name: string;
    idResponsable: number;
}