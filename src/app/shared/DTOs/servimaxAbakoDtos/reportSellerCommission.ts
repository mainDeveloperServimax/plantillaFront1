export interface IReportSellerCommision {
    // nombre de parametros tal cual de abako
    NumeroPedido: string;
    Estado: string;
    Codigo: string;
    Razon_Social: string;
    IdPersona: string;
    IdPersonaChanged?: string;
    Nombres: string;
    Apellidos: string;
    NombresChanged?: string;
    ApellidosChanged?: string;
    dia: string;
    diaNum: string;
    FechaEntrega: string;
    FechaCreacion: string;
    idEmpresa: string;
    confirmado: boolean;
    ProblemaRutero: boolean;
    observaciones: string;
}

export interface IOrdersReportWitProduct extends IReportSellerCommision {
    products: IProductsAbako[];
    Direccion: string;
    lng: string;
    lat: string;
    Barrio: string;
    Localidad: string;
    Ciudad: string;
    Departamento: string;
    isExpress: boolean;
}

export interface IProductsAbako {
    codProduct: string;
    productName: string;
    quantitySale: string;
    price: string;
    idSale: string;
    inventoryQuantity: string;
    idProductAbako: string;
    idOrder: string;
    ivaTax: string;
    otherTasx: string;
}
export interface IProductsRefundAbako {
    idSale: string;
    description: string;
    quantity: string;
    price: number;
    productCode: string;
}

// esta interfaz se genero por una solicitud de ultima hora
export interface IreportDeliver {
    NumeroPedido: string;
    estado: string;
    codigoCliente: string;
    nombreCliente: string;
    grupo: string;
    nombreAsesora: string;
    FechaEntrega: string;
    FechaCreacion: string;
    Observaciones: string;
    Direccion: string;
    Barrio: string;
    products: IProductsAbako[];
    nombreConductor: string;
    noFactura: string;
    ultimaModificacion: string;
}