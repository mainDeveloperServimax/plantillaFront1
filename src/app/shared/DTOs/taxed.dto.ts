import { StateEnum } from "../enums/state.enum";

export interface TaxedResposeDto {
    id: number;
    name: string;
    value: number;
    state: StateEnum;
}