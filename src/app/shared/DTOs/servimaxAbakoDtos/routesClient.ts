/* TODO unificar interfases cuando  se decida que parches conservar */

export interface IClientRoute {
    diaVisita: string;
    asesor: string;
    IdEmpresa: string;
    Descripcion: string;
    IdGrupo: string;
}
export interface IClientRouteDeliver {
    IdPersona: string;
    Dia: number;
    Nombres: string;
    Apellidos: string;
    IdEmpresa: string;
    diaVisita: number;
}


export interface IClientRouteActivate {
    idAsesor: string;
    visita: number;
    DiaEntrega: number;
    nombreAsesor: string;
    apellidoAsesor: string;
    codigoAsesor: string;
    nombreCliente: string;
    codigoCliente: string;
    IdEmpresa: string;
}
