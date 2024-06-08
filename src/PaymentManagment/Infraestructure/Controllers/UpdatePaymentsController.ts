import {Request, Response} from 'express';
import { UpdatePaymentsUseCase } from '../../Application/UseCases/UpdatePaymentsUseCase';

export class UpdatePaymentsController {
    constructor(readonly updatePaymentsUseCase: UpdatePaymentsUseCase) {}

    async run(req: Request, res: Response) {
        const uuid = req.params.UUID;
        const updateData = req.body;

        const response = await this.updatePaymentsUseCase.run(uuid, updateData);
        return res.status(response.status).json(response);
    }
    
}