import { TypeSectorEnum } from "../enums/typeSector.enum";

export interface SectorModelFilterDto {
    tipo?: TypeSectorEnum[];
    padre?: number;
}