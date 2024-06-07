import {PaymentMySQLRepository} from "../../PaymentManagment/Infraestructure/Repositories/PaymentMySQLRepository";

export function getPaymentRepository(dbType:string) {
    if(dbType === 'MySQL') return new PaymentMySQLRepository();
    return new PaymentMySQLRepository();
}