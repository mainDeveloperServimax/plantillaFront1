import { AreaEnum } from "../enums/area.enum";
import { StateEnum } from "../enums/state.enum";
export interface IDomainsDto {
    idDominio: number;
    nombre: string;
    descripcion: string;
    valor: string;
}
export interface IDomainsResponseDto {
    idDominio?: number;
    nombre: string;
    valor:string;
    descripcion: string;
    fechaActualizacion: Date;
    usuarioActualizacion: string;
    fechaCreacion: Date;
    usuarioCreacion: string;
    area: AreaEnum;
    estado: StateEnum;
}