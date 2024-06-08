import { IPayment } from "../../Domain/Ports/IPayment";

export class CreatePaymentsUseCase {
    constructor(readonly paymentRepository: IPayment) {}

    async run(Payment: any) {
        try {
            const newPayment = await this.paymentRepository.CreatePayment(Payment);
            return { status: 201, data: newPayment }; // 201 Created
        } catch (error) {
            console.error(error);
            throw new Error("Error creating payment");
        }
    }
}