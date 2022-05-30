import { IClientRoute } from "./routesClient";

export interface ICompleteOrdersReport {
    asesor: string;
    idGrupoAsesor: string;
    grupoAsesor: string;
    tipoPedido: string;
    FechaCreacion: string;
    horaCreacion: string;
    diaCreacion: string;
    mesCreacion: string;
    totalDev: string;
    nombreCliente: string;
    nompreProducto: string;
    CantidadVenta: string;
    PrecioVenta: string;
    marca: string;
    noFactura: string;
    IdMarcas: string;
    FechaEntrega: string;
    IdEmpresa: string;
    fechaCreacionPedido: string;
    horaCreacionPedido: string;
    diaCreacionPedido: string;
    mesCreacionPedido: string;
    total?: number;
    semanaaioCreacionFactura: string;
    CodigoInterno: string;
    rutasCliente: IClientRoute[];
}