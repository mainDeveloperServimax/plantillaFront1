import { IRelationPaySpreadSheet } from "../deliverCounts.dto";


export interface IDeliverCount {
    billQuantity: number;
    creationDate: string;
    deliverDate: string;
    driverName: string;
    idSpreadSheet: number;
    observation: string;
    sellers: string[];
    spreadSheetNumber: number;
    state: string;
    totalBillRefund: number;
    totalDeliver: number;
    totalRecive: number;
    totalRefundCalculate: number;
    totalRefundSystem: number;
    detailRelationPayment: IRelationPaySpreadSheet;
}
