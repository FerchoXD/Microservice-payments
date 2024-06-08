import { Request, Response } from "express";
import { CreatePaymentsUseCase } from "../../Application/UseCases/CreatePaymentsUseCase";

export class CreatePaymentsController {
    constructor(readonly createPaymentsUseCase: CreatePaymentsUseCase) {}

    async run(req: Request, res: Response) {
        const { paymentState, paymentMethodUUID, transactionUUID, paymentDate } = req.body;

        if (!paymentState || !paymentMethodUUID || !transactionUUID) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const paymentData = {
            paymentState,
            paymentDate: paymentDate || new Date(),  // Asigna la fecha actual si no se proporciona
            paymentMethodUUID,
            transactionUUID,
        };

        const result = await this.createPaymentsUseCase.run(paymentData);
        res.status(result.status).json(result);
    }
}