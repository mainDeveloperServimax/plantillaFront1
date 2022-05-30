import { PromotionTypeEnum } from "../enums/promotionType.enum";
import { StateEnum } from "../enums/state.enum";
import { IAttachmentDto } from "./attachments.dto";

export interface IPromotionDto {
    idPromocion?: number;
    idVersionProducto: number;
    idProducto: number;
    descuento: number;
    fechaInicio: Date;
    fechaFin: Date;
    topeCantidad: number;
    topeDinero: number;
   // codeProducto: string;
    conBanner: boolean
    adjunto?: IAttachmentDto;
    tipoPromocion: PromotionTypeEnum;

}

export interface IpromotionResponseDto {
    idPromocion?: number;
    fechaInicio: Date;
    fechaFin: Date;
    idVersionProducto: number;
    idProducto: number;
    estado: StateEnum;
    descuento: number;
    topeCantidad: number;
    topeDinero: number;
    tieneBanner: boolean;
    urlFileBanner: string;
    tipoPromocion: PromotionTypeEnum;
}