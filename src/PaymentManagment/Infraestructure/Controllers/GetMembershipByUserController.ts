import { Request, Response } from "express";
import { GetMembershipByUserUseCase } from "../../Application/UseCases/GetMembershipByUserUseCase";
import { validateProperties } from "../Helpers/Functions";

export class GetMembershipByUserController {

    constructor(readonly useCase: GetMembershipByUserUseCase){}

    async run(req: Request, res: Response) {

        if (!validateProperties(req.body, ...['userUUID'])) {
            return res.status(400).json({message: "'Missing required properties'"});
        }

        const response = await this.useCase.execute(req.body.userUUID);
        
        return res.status(response.status).json(response);
    }

}