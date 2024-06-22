import { Request, Response } from "express";
import { GetShipmentByUUIDUseCase } from "../../Application/UseCases/GetShipmentByUUIDUseCase";
import { validateProperties } from "../Helpers/Functions";

export class GetShipmentByUUIDController {

    constructor(readonly useCase: GetShipmentByUUIDUseCase){}

    async run(req: Request, res: Response) {

        if (!validateProperties(req.body, ...['uuid'])) {
            return res.status(400).send('Missing required properties');
        }

        const response = await this.useCase.run(req.body.uuid);

        return res.status(response.status).json(response);

    }

}