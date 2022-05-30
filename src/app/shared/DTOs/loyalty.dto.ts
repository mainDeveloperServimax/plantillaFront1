import { AcummulateTypeEnum } from "../enums/acumulateType.enum";
import { ComparationTypesEnum } from "../enums/comparation.enum";
import { LevelProductEnum } from "../enums/levelsProduct.enum";
import { IAttachmentDto } from "./attachments.dto";
import { IBenefitsResposeDto } from "./benefits.dto";

export interface LoyaltyFilterDto {
    nivel: LevelProductEnum[] ;
    fechaInicio: Date;
    fechaFin: Date;
    beneficios: number[];
    page?: number;
    pageNumber?: number;
}
export interface LoyaltyResponseDto {
    idReglaFidelidad?: number;
    tipoComparativo: ComparationTypesEnum;
    rangoInf: number;
    rangoSup: number;
    tipoNivel: LevelProductEnum;
    tipoAcumulado: AcummulateTypeEnum;
    idNivelSelec: {} ; 
    fechaInicio: Date;
    fechaFin: Date;
    cantidad: number;
    beneficio:  IBenefitsResposeDto;
    topeCantidad: number;
    topeDinero: number;
    conBanner: boolean;
    urlFileBanner: string;
}

export interface LoyaltyRuleDto  extends Omit<LoyaltyResponseDto, 'beneficio'>{
    idBeneficio: number;
    adjunto?: IAttachmentDto;
}
