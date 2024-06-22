import { ITransaction } from "../../Domain/Ports/ITransaction";

export class TransactionMySQLRepository implements ITransaction {

    async create(membershipName: string, status: string, userUUID: string, shipmentUUID: string, amount: number, date: Date): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getMembershipByUser(userUUID: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getShipmentByUUID(uuid: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

}