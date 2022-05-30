import { DaysTypeEnum } from "../enums/daysType.enum";
import { OrderTypeEnum } from "../enums/orderType.enum";
import { PayTypeEnum } from "../enums/payType.enum";
import { SaleStateEnum } from "../enums/saleState.enum";
import { IDiscountBennefitResponseDto, IDiscountBennefitsDto } from "./discount.dto";
import { IOrderResponseDto, OrderDto } from "./order.dto";
//TODO traducir a ingles los parametros de los DTOS que hagan falta
export interface ITransactionFilterDto {
    idsComerce?: number[],
    transactionStates: SaleStateEnum[],
    idTransaction?: number
    initDate?: Date;
    endDate?: Date;
}

export interface ITransactionDto {
    idTransaction?: number;
    idComerce: number;
    payForm: PayTypeEnum;
    observaciones: string;
    ordenes: OrderDto[];
    beneficiosAplicados?: IDiscountBennefitsDto[];
    deliveryDate: Date; 
    deliveryDay: DaysTypeEnum; 
    tipoPedido: OrderTypeEnum;
    actualizarCarro: boolean;
}

export interface ITransactionResponseDto {
    tipoPedido: OrderTypeEnum;
    estadoTransaccion: SaleStateEnum;
    totalTransaccion: number;
    totalDescuento: number;
    deliveryDate: Date; 
    totalCambios: number;
    idComercio: number;
    idTransaccion: number;
    observaciones: string;
    ordenes: IOrderResponseDto[];
    beneficiosAplicados: IDiscountBennefitResponseDto[];
}