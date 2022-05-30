import { stateContact } from "../enums/stateContact.enum";
import { typeContact } from "../enums/typeContact.enum";
import { DocumentTypeEnum } from '../enums/documentTypes.enum';

export interface InfoContactDTO {
    tipo: typeContact;
    valor: string;
    estado: stateContact;

}

export interface UpdateInfo{
    valor: string;
    estado: stateContact;
    tipoDocumento: string;
    noDocumento: string;
}