import {Request, Response} from 'express';
import { GetPaymentsUseCase } from "../../Application/UseCases/GetPaymentsUseCase";

export class GetPaymentsController {

    constructor( readonly getPaymentsUseCase: GetPaymentsUseCase) {
        this.getPaymentsUseCase = getPaymentsUseCase;
    }

    async run(req: Request, res: Response) {
        try {
            const response = await this.getPaymentsUseCase.execute();
            res.status(200).send(response);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}