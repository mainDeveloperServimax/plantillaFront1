
export interface IFilterRefundsOrdersByDate {
  fIni: Date,
  fEnd: Date,
  page: number,
  numberPage: number
}

export interface RefundsOrdersByDate {
  billNumber: number;
  carOwner: string,
  carPlateNumber: string,
  clientCode: string,
  deliverDate: Date,
  driverName: string,
  idSale: string,
  phoneDriver: number,
  reason: string,
  refundNumber: number,
  sellerName: string,
  spreadSheetNumber: number,
  stateRefund: string,
  urlBill: string,
  urlLocal: string,
}
