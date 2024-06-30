import { ITransaction } from "../../Domain/Ports/ITransaction";
import { SendInformationAdministrationSaga } from "../Services/SendInformationAdministrationSaga";

export class SendInformationAdministrationUseCaseService {
    
    constructor(
        readonly repository: ITransaction,
        private readonly sendInformationAdministrationSaga: SendInformationAdministrationSaga
    ) {}

    async run() {
        const data = await this.repository.sendInformationAdministration();
        await this.sendInformationAdministrationSaga.sendMessage(data);
        return { status: 200, data }
    }
}
