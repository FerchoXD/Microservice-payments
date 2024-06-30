import { ITransaction } from "../../Domain/Ports/ITransaction";

export class GetAllUseCase {
    constructor(readonly repository: ITransaction){}

    async run() {
        return await this.repository.getAll();
    }
}