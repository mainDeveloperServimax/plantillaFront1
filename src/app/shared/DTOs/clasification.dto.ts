import { ClasificationTypeEnum } from "../enums/clasificationType.enum";
import { StateEnum } from "../enums/state.enum";
import { IAttachmentDto } from "./attachments.dto";

export interface IClasificationFilterDto {
    clasificationTypes: ClasificationTypeEnum[];
    states: StateEnum[];
    listIds?: number[];
}
export interface IClasificationDto {
    idClasification?: number;
    name: string;
    description: string;
    attach?: IAttachmentDto
    clasificationType: ClasificationTypeEnum,
}
export interface IClasificationResponseDto {
    idClasification: number;
    name: string;
    description: string;
    urlFile: string;
    state: StateEnum;
    clasificationType: ClasificationTypeEnum,
    relationList: { name: string, clasificationType: ClasificationTypeEnum }[]
}