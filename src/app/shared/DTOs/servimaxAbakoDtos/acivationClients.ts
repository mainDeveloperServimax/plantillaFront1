import { IAttachmentDto } from '../attachments.dto';
import { IZoneRankResponseDto } from '../zoneMaps.dto';
import { IClientRouteActivate } from './routesClient';
export interface IActivationClientsResponse {
    clientCode: string;
    sellerCode: string;
    isApprove: boolean;
    activationDate: Date;
    createdDate: Date;
    urlAttach: string;
}


export interface IActivationClientsFilter {
    clientCode?: string,
    firstCreationDate?: Date,
    secondCreationDate?: Date
}


export interface IActivationClientsInsert {
    clientCode: string;
    document: string;
    documentBussiness: string;
    sellerCode: string;
    attach: IAttachmentDto
}



export interface ISearchClient {
    searchText: string;
    numPage: number;
    page: number;
}

export interface IResultDataClientAbako {
    IdentificacionClient: string;
    Lat: string;
    address: string;
    bussinesName: string;
    channel: string;
    city: string;
    clientName: string;
    codeChannel: string;
    codeClient: string;
    commonName: string;
    department: string;
    idUserApp: string;
    identificationBussines: string;
    lng: string;
    locality: string;
    neightborhood: string;
    phone: string;
    role: string;
    blockState: number;
    route: IClientRouteActivate[],
}

export interface IResultDataClient extends IResultDataClientAbako {
    dataActivation: IActivationClientsResponse;
    topZones: IZoneRankResponseDto[];
    sellerActivationName: string;
}