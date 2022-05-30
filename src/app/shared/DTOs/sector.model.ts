import { TypeSectorEnum } from '../enums/typeSector.enum';

export interface SectorModel {
    idSector: number;
    nombre: string;
    tipo: TypeSectorEnum;
    padre: number;
}