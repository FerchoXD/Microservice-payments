import { v4 as uuidv4 } from 'uuid';

export class Transaction {
    uuid: string;
    membershipName: string;
    status: string;
    userUUID: string;
    shipmentUUID: string;
    amount: number;
    transactionDate: Date;

    constructor(membershipName: string, status: string, userUUID: string, shipmentUUID: string, amount: number, date:Date) {
        this.uuid = this.generateUuid();
        this.membershipName = membershipName;
        this.status = status;
        this.userUUID = userUUID;
        this.shipmentUUID = shipmentUUID;
        this.amount = amount;
        this.transactionDate = date;
    }

    generateUuid(): string {
        return uuidv4();
    }
}
