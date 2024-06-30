import { Transaction } from "../Entities/Transaction";

export interface ITransaction {
    create( membershipName: string, status: string, userUUID: string, shipmentUUID: string, amount: number, transactionDate: Date ,promotion: string,orderUUID: string,email: string):Promise<Transaction | any>;
    getMembershipByUser( userUUID: string ): Promise<Transaction | any>;
    getShipmentByUUID( uuid:string ): Promise<Transaction | any>;
    getAll(): Promise<Transaction | any>;
}