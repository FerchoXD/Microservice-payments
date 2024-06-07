import {Request, Response} from 'express';
import { UpdatePaymentsUseCase } from '../../Application/UseCases/UpdatePaymentsUseCase';

export class UpdatePaymentsController {

    constructor( readonly updatePaymentsUseCase: UpdatePaymentsUseCase) {
        this.updatePaymentsUseCase = updatePaymentsUseCase;
    }

    async run(req: Request, res: Response) {
        const payment = req.body.payment;
        try {
            const response = await this.updatePaymentsUseCase.execute(payment);
            res.status(200).send(response);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}