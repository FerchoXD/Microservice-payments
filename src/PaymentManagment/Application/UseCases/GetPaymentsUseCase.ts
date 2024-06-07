import { IPayment } from "../../Domain/Ports/IPayment";

export class GetPaymentsUseCase {
    private paymentRepository: IPayment;

    constructor(paymentRepository: IPayment) {
        this.paymentRepository = paymentRepository;
    }

    async execute() {
        return await this.paymentRepository.GetPayments();
    }
}