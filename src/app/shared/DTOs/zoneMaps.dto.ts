import { DaysTypeEnum } from "../enums/daysType.enum";
import { StateEnum } from "../enums/state.enum";
import { IResponsableBussinesResponseDto } from "./responsableBussines.dto";

export interface PointMapDto {
    lat: number;
    lng: number;
}

export interface IZoneMapsDto {
    idZone: number;
    name: string;
    description: string;
    areaMaps: PointMapDto[];
    state: StateEnum;
    dayWeek: DaysTypeEnum;
    color: string;
    idResponsablesByZone: number[];
}

export interface IZoneMapsResponseDto {
    idZone: number;
    name: string;
    description: string;
    areaMaps: PointMapDto[];
    state: StateEnum;
    dayWeek: DaysTypeEnum;
    color: string;
    center: PointMapDto;
    //responsablesByZone: IResponsableBussinesResponseDto[];
}
export interface IZoneRankResponseDto {
    idZone: number;
    name: string;
    belong: boolean;
    distance: number;
    day: DaysTypeEnum;
}

export interface IZoneResponsableNoveltyRelation {
    idZone: number;
    idCurrentResp: number;
    idNewResp: number;
    changeReason: string;
    idUserCreation: number;
}
export interface IZoneResponsableNoveltyRelationResponse {
    idZone: number;
    nameZone: string;
    idCurrentResponsable: number;
    rolCurrent: string;
    nameCurrent: string;
    idNewResponsable: number;
    rolNew: string;
    nameNew: string;
    creationUser: {
        name: string;
        idResponsable: number;
    };
    approveUser: {
        name: string;
        idResponsable: number;
    };
    initDate: Date;
    endDate: Date;
    reason: string;
    creationDate: Date;

}