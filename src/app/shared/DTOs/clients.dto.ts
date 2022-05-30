import { DocumentTypeEnum } from "../enums/documentTypes.enum";
import { ProfileEnum } from "../enums/profile.enum";
import { StateEnum } from "../enums/state.enum";
import { StateComerce } from "../enums/stateComerce.enum";
import { IAttachmentDto } from "./attachments.dto";
import { IComercioDto, IComercioResponseDto } from "./comercio.dto";
import { InfoContactDTO } from './contact.DTO';

export interface IClientResponseDto {
    completeName: string;
    documentType: DocumentTypeEnum;
    documentNumber: string;
    state: StateEnum;
    comerceList: IComercioResponseDto[];
    profile: ProfileEnum;
    contactList: InfoContactDTO[];
    urlDocumentFront: string;
    urlDocumentBack: string;
    urlSign: string;
}
export interface IClientDto {
    names: string;
    lastNames: string;
    documentType: DocumentTypeEnum;
    documentNumber: string;
    sign: IAttachmentDto;
    photoDocumentFront: IAttachmentDto;
    photoDocumentBack: IAttachmentDto;
    contactInfoList: InfoContactDTO[];
    commerceList: IComercioDto[];
    userInscription: string;
}
export interface IClientFilterDto {
    nombreIdentificacion?: string;
    estadosClientes?: StateEnum[];
    estadoComercio?: StateComerce[];
    page?: number;
    pageNumber?: number;
}
