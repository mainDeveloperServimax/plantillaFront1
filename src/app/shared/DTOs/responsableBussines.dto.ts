import { DocumentTypeEnum } from "../enums/documentTypes.enum";
import { ResponsabilityTypeEnum } from "../enums/responsabilityType.enum";
import { StateEnum } from "../enums/state.enum";

export interface IResponsableBussinesResponseDto {
    readonly idZone: number;
    readonly idResponsableNegocio?: number;
    DocumentType: DocumentTypeEnum;
    noDocument: string;
    responsabilityType: ResponsabilityTypeEnum;
    state: StateEnum;
    completeName: string;
}