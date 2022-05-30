export interface IDriversPicking extends IStateSpreadSheet {
    driverName: string;
    obsevation: string;
    deliverDate: string;
    totalProducts: number;
    idPersona: number;
}


export interface IStateSpreadSheet {
    spreadSheetNumber: string;
    sign?: any;
    totalReviewProducts?: number;
    totalDeliverProduts?: number;
    totalReading?: number;
}