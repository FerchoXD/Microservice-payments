import { Transaction } from "../Entities/Transaction";

export interface ITransaction {
    create( membershipName: string, status: string, userUUID: string, shipmentUUID: string, amount: number, date: Date ):Promise<Transaction | any>;
    getMembershipByUser( userUUID: string ): Promise<Transaction | any>;
    getShipmentByUUID( uuid:string ): Promise<Transaction | any>;
}