import { Request, Response } from 'express';
import { SendInfoNotificationUseCase } from '../../Application/UseCases/SendInfoNotificationUseCase';

export class SendInfoNotificationController {

    constructor(private useCase: SendInfoNotificationUseCase) {}

    async run(req: Request, res: Response) {
        const { membershipName, status, userUUID, shipmentUUID, amount, transactionDate, promotion, orderUUID, email } = req.body;
        try {
            const response = await this.useCase.run(
                membershipName, 
                status, 
                userUUID, 
                shipmentUUID, 
                amount, 
                new Date(transactionDate), 
                promotion, 
                orderUUID, 
                email
            );
            res.status(response.status).json(response.data);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
