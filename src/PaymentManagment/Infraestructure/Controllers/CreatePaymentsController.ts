import { Request, Response } from "express";
import { CreatePaymentsUseCase } from "../../Application/UseCases/CreatePaymentsUseCase";

export class CreatePaymentsController {

    constructor( readonly createPaymentsUseCase: CreatePaymentsUseCase) {}

    async run(req: Request, res: Response) {
            const response = await this.createPaymentsUseCase.run(req.body.payment);
            return res.status(200).send(response);
    }
}