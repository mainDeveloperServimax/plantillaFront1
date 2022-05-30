import { OrderTypeEnum } from "../../enums/orderType.enum";
import { IClientRouteDeliver } from "./routesClient";

export interface IReportCommisonDirver {
    NumeroPlanilla: string;
    NumeroPedido: string;
    numeroFactura: string;
    nombreCliente: string;
    Barrio: string;
    precioNeto: string;
    Direccion: string;
    nombreConductor: string;
    numeroVehiculo: string;
    FechaCreacion: string;
    fechaAprobacion: string;
    FechaEntrega: string;
    nombreAsesor: string;
    codigoCliente: string;
    totalDevolucion: string;
}


export interface IOrderByApprove extends Omit<IReportCommisonDirver, 'totalDevolucion'> {
    Estado: string;
    Latitud: string;
    Longitud: string;
    Localidad: string;
    identificacionConductor: string;
    NombreComun: string;
    IdpedidoVenta: string;
    tipoPedido: OrderTypeEnum;
    telefono: string;
    UsuarioUltimaMoficicacion: number;
    clientRoute: IClientRouteDeliver[]
}
export interface IOrdersCheckDrivers extends IOrderByApprove {
    totalVenta: number;
}
