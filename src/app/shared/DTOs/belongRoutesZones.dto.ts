import { DaysTypeEnum } from "../enums/daysType.enum";


export interface IBelongComerceZonesDto {
    idComerce: number;
    day: Date;
    nameDay: DaysTypeEnum;
    numberDay: number;

}