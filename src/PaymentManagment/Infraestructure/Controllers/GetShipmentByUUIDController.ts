import { Request, Response } from "express";
import { GetShipmentByUUIDUseCase } from "../../Application/UseCases/GetShipmentByUUIDUseCase";
import { validateProperties } from "../Helpers/Functions";

export class GetShipmentByUUIDController {

    constructor(readonly useCase: GetShipmentByUUIDUseCase){}

    async run(req: Request, res: Response) {

        if (!validateProperties(req.body, ...['shipmentUUID'])) {
            return res.status(400).json({message: "'Missing required properties'"});
        }

        const response = await this.useCase.run(req.body.shipmentUUID);

        return res.status(response.status).json(response);

    }

}