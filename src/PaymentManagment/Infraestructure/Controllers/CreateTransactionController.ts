import { Request, Response } from "express";
import { CreateTransactionUseCase } from "../../Application/UseCases/CreateTransactionUseCase";
import { validateProperties } from "../Helpers/Functions";

export class CreateTransactioncontroller {

    constructor(readonly useCase: CreateTransactionUseCase) { }

    async run(req: Request, res: Response) {
        let {
            membershipName = '',
            status,
            userUUID,
            shipmentUUID = '',
            amount,
            transactionDate
        } = req.body;

        // Si ninguno de los dos campos (membershipName o shipmentUUID) está presente, retornar un error
        console.log("1", membershipName, "2", shipmentUUID)
        if (!membershipName && !shipmentUUID) {
            return res.status(400).json('Missing required properties, required: membershipName or shipmentUUID');
        }
        const requiredProperties = [
            // 'membershipName', 
            'status',
            'userUUID',
            // 'shipmentUUID', 
            'amount',
            'transactionDate'
        ];

        if (!validateProperties(req.body, ...requiredProperties)) {
            return res.status(400).json('Missing required properties');
        }

        let response;
        if (membershipName)
            response = await this.useCase.run(membershipName, status, userUUID, shipmentUUID = "", amount, transactionDate);
        else
            response = await this.useCase.run(membershipName = "", status, userUUID, shipmentUUID, amount, transactionDate);

        return res.status(response.status).json(response);
    }

}