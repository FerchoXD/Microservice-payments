import { Request, Response } from "express";
import { GetAllUseCase } from "../../Application/UseCases/GetAllUseCase";

export class GetAllController {
    constructor(readonly useCase: GetAllUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.useCase.run();
        return res.status(response.status).json(response);
    }
    
}