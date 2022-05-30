import { FolderTypes } from "./../types/folderImage.types";
export interface IAttachmentDto {
    nombre: string,
    tipo: string,
    ruta: FolderTypes,
    base64: string,// only base64 code without intial string
}