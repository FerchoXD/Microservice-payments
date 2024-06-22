import { ITransaction } from "../../Domain/Ports/ITransaction";

export class GetShipmentByUUIDUseCase {

    constructor(readonly repository: ITransaction){}

    async run(uuid: string) {
        return await this.repository.getShipmentByUUID(uuid);
    }

}