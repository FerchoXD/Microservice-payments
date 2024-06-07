import { IPayment } from "../../Domain/Ports/IPayment";

export class UpdatePaymentsUseCase {
    private paymentRepository: IPayment;

    constructor(paymentRepository: IPayment) {
        this.paymentRepository = paymentRepository;
    }

    async execute(payment: any) {
        return await this.paymentRepository.UpdatePayment(payment);
    }
}