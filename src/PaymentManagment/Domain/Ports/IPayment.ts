import { Payment } from "../Entities/Payment";

export interface IPayment {
    CreatePayment(data:any):Promise<any>;
    GetPayments():Promise<Payment[]>;
    UpdatePayment(paymentData: Partial<Payment> & { uuid: string }):Promise<any>;
    //getPayment(uuid:string):Promise<Payment>;
    //deletePayment(uuid:string):Promise<boolean>;
}