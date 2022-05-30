import { ClasificationTypeEnum } from "../enums/clasificationType.enum";
import { ErpEnum } from "../enums/erp.enum";
import { PriceType } from "../enums/priceType.enum";
import { StateEnum } from "../enums/state.enum";
import { TaxTypeEnum } from "../enums/taxType.enum";
import { IAttachmentDto } from "./attachments.dto";
import { IBannerDto, IBannerResponseDto } from "./banners.dto";
export interface IProductFilterBCDto {
    idClasification?: number;
    relationChild?: ClasificationTypeEnum[];
    page?: number;
    pageNumber?: number;
}
export interface IProductFilterDto {
    states: StateEnum[];
    page: number;
    pageNumber: number;
    name?: string;
    listIdClasification?: number[],
    productsIds?: number[];
}
export interface IProductDto {
    id?: number;
    clasifications: { idClasification: number, name: string, type: ClasificationTypeEnum }[];
    name: string;
    detail: string;
    attach: IAttachmentDto;
    price: number;
    erp: ErpEnum;
    idHomologado?: string;
    priceRecomended: number;
    buyPrice: number;
    banner?: IBannerDto;
    priceType: PriceType;
    measureUnity: string;
    rentability: number;
    idTax: number[];
}
export interface IProductResponseDto extends Omit<IProductDto, 'attach' | 'banner' | 'idTax'> {
    urlFile: string;
    bannerResponse: IBannerResponseDto;
    idVersion: number;
    taxed: { id: number, name: string, value: number, type: TaxTypeEnum }[];
}

export interface IRelationProductDto {
    idClasifLvl2: number;
    idClasifLvl3: number;
    countProducts: number;
    cumulativeSum: number;
    itemInitial: number;
}

export interface IRelationIdProductDto extends Omit<IRelationProductDto, 'cumulativeSum' | 'itemInitial' | 'countProducts'> {
    idProduct: number
}