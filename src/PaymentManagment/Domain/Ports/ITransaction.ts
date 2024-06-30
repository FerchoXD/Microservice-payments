import { Transaction } from "../Entities/Transaction";

export interface ITransaction {
    create(
        membershipName: string, 
        status: string, 
        userUUID: string, 
        shipmentUUID: string, 
        amount: number, 
        transactionDate: Date, 
        promotion: string, 
        orderUUID: string, 
        email: string
    ): Promise<{ status: number, data: any }>;
    getMembershipByUser(userUUID: string): Promise<{ status: number, data: any }>;
    getShipmentByUUID(shipmentUUID: string): Promise<{ status: number, data: any }>;
    getAll(): Promise<{ status: number, data: any }>;
    sendInformationAdministration(): Promise<{ status: number, data: any }>;
}
