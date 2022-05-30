import { DocumentTypeEnum } from "../enums/documentTypes.enum";

export interface UserData {
    token?: string;
    firstName?: string;
    lastName?: string;
    noDocument?: string;
    documentType?: DocumentTypeEnum;
    comerceList?: {
        idComerce: number;
        name: string;
        address: string;
    }[],
}
export interface UserDataAdmin {
    readonly idResponsable: number;
    token?: string;
    firstName?: string;
    lastName?: string;
    noDocument?: string;
    documentType?: DocumentTypeEnum;
    roles: { id: number, name: string }[],
    permissions: { id: number, name: string, code: string, roleId: number[] }[]
}