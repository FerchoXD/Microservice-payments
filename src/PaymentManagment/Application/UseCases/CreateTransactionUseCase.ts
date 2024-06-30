import { ITransaction } from "../../Domain/Ports/ITransaction";

export class CreateTransactionUseCase {
    constructor(readonly repository: ITransaction){}

    async run(membershipName: string, status: string, userUUID: string, shipmentUUID: string, amount: number, transactionDate: Date,promotion: string,orderUUID: string,email: string) {
        return await this.repository.create(membershipName, status, userUUID, shipmentUUID, amount, transactionDate, orderUUID, email,promotion);
    }
}