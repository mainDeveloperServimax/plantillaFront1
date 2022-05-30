
export interface IFinancialDashboardDto {

    xArray: number[];//pasara a string y concatenar año y perido
    totalSales: number[];
    totalRefund: number[];
    averageRebuy: number[];
    totalClientBought: number[];
    totalClientReBought: number[];

    /*  grooupingSalesForce: {
         nameGroup: string;
         nameBrand: string;
         totalSale: number;
         outNormalSale: boolean;
     }[]; */
    buubleFrecuency: {
        day: number;
        hour: number;
        totalSales: number;
    }[][];
    outRoutes: number[];
    /* topClients: string[]; */
}

export interface IreportFinancialByGroup {
    isGeneral: boolean;
    nameGroup: string;
    nameBrand: string;
    completeData: IFinancialDashboardDto;
}