import { Payment } from "../Entities/Payment";

export interface IPayment {
    CreatePayment(payment:Payment):Promise<Payment>;
    GetPayments():Promise<Payment[]>;
    UpdatePayment(payment:Payment):Promise<Payment>;
    //getPayment(uuid:string):Promise<Payment>;
    //deletePayment(uuid:string):Promise<boolean>;
}