import { BenefitsTypesEnum } from "../enums/benefitsTypes.enum";
import { LevelProductEnum } from "../enums/levelsProduct.enum";
import { StateEnum } from "../enums/state.enum";

export interface IBenefitFilterDto {
    nombre: string;
    state: StateEnum;
    tipoValor: BenefitsTypesEnum;
    page?: number;
    pageNumber?: number;
}

export interface IBenefitsResposeDto {
    idBeneficio?: number;
    nombre: string;
    estado: StateEnum;
    version: number;
    valor: number;
    tipoValor: BenefitsTypesEnum;
    maximoPorCompra: number;
    nivelBeneficioAplicado: LevelProductEnum;
    automatico: boolean;
    topeCantidad: number;
    topeDinero: number;
}
export interface IBenefitDto {
    idBeneficio?: number;
    nombre: string;
    descripcion: string;
    valor: number;
    tipoValor: BenefitsTypesEnum;
    topeCantidad: number;
    topeDinero: number;
    maximoCompra: number;
    nivelBeneficioAplicado: LevelProductEnum;
    automatico: boolean;
}