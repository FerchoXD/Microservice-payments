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

        async UpdatePayment(paymentData: Partial<Payment> & { uuid: string }): Promise<any> {
            const { uuid, ...updateData } = paymentData;
            try {
                const payment = await PaymentModel.findByPk(uuid);
                if (!payment) {
                    return {
                        status: 404,
                        message: "Payment not found",
                    }
                }

                Object.assign(payment, updateData);

                await payment.save();

                return {
                    status: 200,
                    payment,
                }
            } catch (error) {
                return {
                    status: 500,
                    message: error,
                }
            }

        }
    
}