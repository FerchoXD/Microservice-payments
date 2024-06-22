import { ITransaction } from "../../Domain/Ports/ITransaction";

export class GetMembershipByUserUseCase {

    constructor(readonly repository: ITransaction){}

    async run(userUUID: string) {
        return await this.repository.getMembershipByUser(userUUID);
    }

}