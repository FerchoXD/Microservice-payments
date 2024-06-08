import { Payment } from "../../Domain/Entities/Payment";
import { IPayment } from "../../Domain/Ports/IPayment";
import {generateUuid} from  "../Helpers/generateUuid";
import { PaymentModel } from "../Models/MySQL/PaymentModel";

export class PaymentMySQLRepository implements IPayment {
    
        async GetPayments() {
            return await PaymentModel.findAll();
        }
    
        async CreatePayment(payment: any): Promise<any> {
            const newPayment = {
                uuid: generateUuid(),
                paymentState: payment.paymentState,
                paymentDate: payment.paymentDate || new Date(), // Asigna la fecha actual si no se proporciona
                paymentMethodUUID: payment.paymentMethodUUID,
                transactionUUID: payment.transactionUUID,
            };
    
            await PaymentModel.create(newPayment);
            return newPayment;
        }

        async UpdatePayment(payment: Payment): Promise<Payment> {
            const updatedPayment = {
                //* here you must specify the properties you want to update
                //paymentamount: payment.paymentAmount,
                //paymentmethod: payment.paymentMethod,
                //paymentdescription: payment.paymentDescription,
                //paymentcurrency: payment.paymentCurrency,
                //paymenttype: payment.paymentType,
                // updatedAt: new Date()
                paymentstate: payment.paymentState,
                paymentdate: payment.paymentDate,
                paymentmethod: payment.paymentMethodUUID,
                paymenttransaction: payment.transactionUUID,
            };
    
            await PaymentModel.update(updatedPayment, {
                where: {
                    id: payment.uuid
                }
            });
            return payment;
        }
    
}