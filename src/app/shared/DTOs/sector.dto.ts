import { TypeSectorEnum } from "../enums/typeSector.enum";

export interface ISectorResponse {
    id: number;
    name: string;
    type: TypeSectorEnum;
    father: number;
}