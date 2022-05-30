import { SegmentTypeEnum } from "../enums/segmentType.enum";
import { StateEnum } from "../enums/state.enum";
import { StateComerce } from "../enums/stateComerce.enum";
import { TypeSectorEnum } from "../enums/typeSector.enum";
import { IAttachmentDto } from "./attachments.dto";

export interface IComercioResponseDto {
    idComercio?: number;
    name: string;
    nit: string;
    lat: string;
    lon: string;
    address: string;
    stateComerce: StateComerce;
    photoLocal: string;
    photoNit: string;
    photoAddress: string;
    sectorList: ISectorComerceList[];
}

export interface IComercioDto {
    idComercio?: number;
    nit: string;
    name: string;
    lat: string;
    lon: string;
    address: string;
    sector: number[];
    photoLocal: IAttachmentDto;
    photoNit: IAttachmentDto;
    photoAddress: IAttachmentDto;
    idSegment: number;
}

export interface IComercioStatesDto {
    idComercio: number;
    newStateComerce: StateComerce;
    newState: StateEnum;
}


export interface ISectorComerceList {
    name: string,
    type: TypeSectorEnum
}

export interface ISegmentCommerce {
    idSegment?: number;
    name: string;
    segmentType: SegmentTypeEnum
}