import { DiscountTypeEnum } from "../enums/discountType.enum";

export interface IFilerDiscountDto {
    beneficiosID: number[];
    promocionesID: number[];
    productosID: { version: number, idProducto: number }[];
    idTransaccion: number[];
    tipoDescuento: DiscountTypeEnum;
    page?: number,
    pageNumber?: number

}

export interface IDiscountBennefitsDto {
    idDescuento: number;
    cantidad: number;
}

export interface IDiscountBennefitResponseDto {
    tipoDescuento: DiscountTypeEnum;
    cantidad: number;
    idBeneficio: number;
    nombreBeneficio: string;
    subtotal: number;
}
