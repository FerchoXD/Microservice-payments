import { Request, Response } from "express";
import { CreateTransactionUseCase } from "../../Application/UseCases/CreateTransactionUseCase";
import { validateProperties } from "../Helpers/Functions";

export class CreateTransactioncontroller {

    constructor(readonly useCase: CreateTransactionUseCase){}

    async run(req: Request, res: Response) {
        const requiredProperties = [
            'membershipName', 
            'status', 
            'userUUID', 
            'shipmentUUID', 
            'amount', 
            'date'
        ];

        if (!validateProperties(req.body, ...requiredProperties)) {
            return res.status(400).send('Missing required properties');
        }
    
        const { membershipName, status, userUUID, shipmentUUID, amount, date } = req.body;

        const response = await this.useCase.run(membershipName, status, userUUID, shipmentUUID, amount, date);
        
        return res.status(response.status).json(response);
    }

}