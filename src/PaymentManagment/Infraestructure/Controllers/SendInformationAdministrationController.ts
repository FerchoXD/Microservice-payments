import { Request, Response } from "express";
import { SendInformationAdministrationUseCaseService } from "../../Application/UseCases/SendInformationAdministrationUseCaseService";

export class SendInformationAdministrationController {

    constructor(readonly useCase: SendInformationAdministrationUseCaseService){}

    async run(req: Request, res: Response) {
        const response = await this.useCase.run();

        return res.status(response.status).json(response);
    }

}