import { IPayment } from "../../Domain/Ports/IPayment";

export class UpdatePaymentsUseCase {
    constructor(readonly paymentRepository: IPayment) {}

    async run(uuid: string, updateData: Partial<any>) {
        return await this.paymentRepository.UpdatePayment({uuid, ...updateData });
    }
}