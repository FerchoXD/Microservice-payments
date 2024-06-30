import { ITransaction } from "../../Domain/Ports/ITransaction";
import { SendInfoNotificationSaga } from "../Services/SendInfoNotificationSaga";

export class SendInfoNotificationUseCase {

    constructor(
        readonly repository: ITransaction,
        private readonly sendInfoNotificationSaga: SendInfoNotificationSaga
    ) {}

    async run(membershipName: string, status: string, userUUID: string, shipmentUUID: string, amount: number, transactionDate: Date, promotion: string, orderUUID: string, email: string): Promise<{ status: number, data: any }> {
        try {
            const data = await this.repository.create(
                membershipName,
                status,
                userUUID,
                shipmentUUID,
                amount,
                transactionDate,
                promotion,
                orderUUID,
                email
            );

            if (data.status === 201) {
                await this.sendInfoNotificationSaga.sendMessage(data.data);
            }
            
            return { status: 201, data: data.data };
        } catch (error) {
            return { status: 500, data: { error: 'Internal server error'} };
        }
    }
}
