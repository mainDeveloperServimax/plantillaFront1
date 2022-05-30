import { StateEnum } from "../enums/state.enum";
import { IAttachmentDto } from "./attachments.dto";

export interface IBannerDto {
    idBanner?: number;
    fechaInicio: Date;
    fechaFin: Date;
    adjunto: IAttachmentDto;

}

export interface IBannerResponseDto {
    idBanner: number;
    urlFile: string;
    estado: StateEnum;
    fechaInicio: Date;
    fechaFin: Date;
}