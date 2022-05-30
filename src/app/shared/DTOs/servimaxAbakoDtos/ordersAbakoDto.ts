import { statesTraking } from "../../enums/statesTraking.enum";
import { IProductsAbako, IProductsRefundAbako } from "./reportSellerCommission";

export interface IProductOrderAbako {
    code: string;
    unity: string;
    quantity: string;
}

export interface IOrdersAbakoDto {
    idIntern: string;
    codAsesor: string;
    codCliente: string;
    dateCreation: string;
    deliverDate: string;
    observation: string;
    products: IProductOrderAbako[];
}

export interface IFilterDetailTrakingOrders {

    fIni: Date,
    fEnd: Date,
    searchText: string,
    nameSeller: string,
    nameDriver: string,
    productName: string,
    state: statesTraking,
    page: number,
    noPage: number
}



/*  este va */
export interface IOrdersListFirstSecondStateAbako {
    billCode: string;
    billState: string;
    clientCode: string;
    clientIdentification: string;
    clientName: string;
    codeSeller: string;
    creationDate: string;
    dateOrderApprove: string;
    deliverDate: string;
    driverName: string;
    idDriver: string;
    idRefund: null;
    idSale: string;
    nameSeller: string;
    orderNumber: string;
    orderObservation: null;
    orderState: string;
    spreadSheetNumber: number;
    spreadSheetState: string;
    state: statesTraking;
    source: string
}

export interface IBuyFromCommission {
    codeClient: string;
    creationDate: string;
    creationDateComplete: string;
    dayCreationOrder: string;
    deliverDate: string;
    name: string;
    numberBuy: number;
    numberWeek: string;
    numbersBill: string;
    numbersOrders: string;
    observations: string;
    routerList: RouterList[];
    totalSale: number;
}

export interface RouterList {
    Descripcion: string;
    IdEmpresa: string;
    IdGrupo: string;
    asesor: string;
    diaVisita: number;
    orden: number;
    idSeller: number;
}

export interface IDetailCient {
    address: string,
    bussinesIdentification: string,
    bussinesName: string,
    city: string,
    clientName: string,
    codeClient: string,
    commonName: string,
    department: string,
    identification: string,
    lat1: string,
    lat2: string,
    lng1: string,
    lng2: string,
    locality: string,
    neightborhood: string
}