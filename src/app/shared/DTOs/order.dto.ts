import { IProductResponseDto } from "./products.dto";

export interface OrderDto {
    idVersionProducto: number;
    idProducto: number;
    cantidad: number;
    isCambio: boolean;
}

export interface IOrderResponseDto extends Omit<IProductResponseDto, 'clasifications' | 'erp' > {
    quantity: number;
}