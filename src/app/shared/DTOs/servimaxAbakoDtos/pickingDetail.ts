import { SpreadSheetTypeEnum } from "../../enums/spreadSheetType.enum";

export interface IPickingDetail {
    spreadSheetNumber: number;
    billNumber: string;
    source: string;
    billObservation: string;
    driverName: string;
    generalBrand: string;
    productPromotionCode: string;
    productPromotionNameSale: string;
    productPromotionNameBuy: string;
    productCode: string;
    productNameSale: string;
    productNameBuy: string;
    price: string;
    quantity: string;
    productPromotionPrice: string;
    conversion: string;
    packaging: string;

}
export interface IPickingDetailToClient {
    spreadSheetNumber: string;
    driverName: string;
    totalPicking: number;
    products: IProductPickingDetail[];
}

export interface IProductPickingDetail {
    generalBrand: string;
    billNumber: string;
    billObservation: string;
    name: string;
    code: string;
    price: number;
    quantity: number;
    check?: boolean;
    partialNote?: string;
    countReviewer: number;
    countReading: number;
    packaging: number;
}

export interface IProductSpreadCheck {
    spreadSheetNumber: string;
    productCode: string;
    partialNote: string;
    check: boolean;  
    countReviewer: number;
    countReading: number;
    typeRelation: SpreadSheetTypeEnum;
}


export interface IValidateClientActive {
    Bloqueo:        number;
    Codigo:         string;
    Identificacion: string;
    Razon_Social:   string;
    Usuario:        string;
    nombre:         string;
}

