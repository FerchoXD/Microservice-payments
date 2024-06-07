import { v4 as uuidV4 } from "uuid";

export class Payment {
    uuid!:string;
    paymentState!:string;
    paymentDate!:Date;

    paymentMethodUUID!:string;
    transactionUUID!:string;

    constructor(paymentState:string, paymentMethodUUID:string, transactionUUID:string) {
        this.uuid = uuidV4();// Llama a la función directamente
        this.paymentState = paymentState;
        this.paymentDate = new Date();
        this.paymentMethodUUID = paymentMethodUUID;
        this.transactionUUID = transactionUUID;
    }
}
