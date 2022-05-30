export interface IRelationPaySpreadSheet {
    spreadSheetNumber: string;
    numberProofPayment: string;
    userEditionId: number;
    listPay: IPayContent[];
    countNumberBank: string;

}


export interface IPayContent {
    payTypeId: number;
    value: number;
}

export interface IPayTypeItem extends Omit<IPayContent, 'value'> {
    name: string;
}