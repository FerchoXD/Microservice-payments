import { ITransaction } from "../../Domain/Ports/ITransaction";

export class CreateTransactionUseCase {
    constructor(readonly repository: ITransaction){}

    async run(membershipName: string, status: string, userUUID: string, shipmentUUID: string, amount: number, transactionDate: Date) {
        return await this.repository.create(membershipName, status, userUUID, shipmentUUID, amount, transactionDate);
    }
}