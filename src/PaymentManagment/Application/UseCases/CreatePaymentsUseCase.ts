import { IPayment } from "../../Domain/Ports/IPayment";

export class CreatePaymentsUseCase {

    constructor(readonly paymentRepository: IPayment) {}

    async run(payment: any) {
        return await this.paymentRepository.CreatePayment(payment);
    }
}