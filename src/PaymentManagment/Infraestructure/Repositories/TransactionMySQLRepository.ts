import { ITransaction } from "../../Domain/Ports/ITransaction";
import { TransactionModel } from "../Models/MySQL/TransactionModel";

export class TransactionMySQLRepository implements ITransaction {

    async create(membershipName: string, status: string, userUUID: string, shipmentUUID: string, amount: number, date: Date): Promise<any> {
        try{
            if(membershipName){
                const data = await TransactionModel.create({
                    membershipName,
                    status,
                    userUUID,
                    amount,
                    date
                });
    
                return {
                    status: 201,
                    data: data.toJSON()
                };
            }else{
                const data = await TransactionModel.create({
                    status,
                    userUUID,
                    shipmentUUID,
                    amount,
                    date
                });
    
                return {
                    status: 201,
                    data: data.toJSON()
                };
            }
        }catch(error){
            return {
                status: 500,
                message: 'Internal server error',
            };
        }
    }

    async getMembershipByUser(userUUID: string): Promise<any> {
        try {
            const data = await TransactionModel.findOne({
                where: { userUUID: userUUID },
                attributes: ['uuid', 'userUUID', 'membershipName', 'status']
            });

            if (!data) {
                return {
                    status: 404,
                    message: 'User not found',
                };
            }

            return {
                status: 200,
                data: data.toJSON()
            };
        } catch (error) {
            return {
                status: 500,
                message: 'Internal server error',
            };
        }
    }

    async getShipmentByUUID(shipmentUUID: string): Promise<any> {
        try {
            const data = await TransactionModel.findOne({
                where: { shipmentUUID: shipmentUUID },
                attributes: ['uuid', 'userUUID', 'amount', 'status']
            });

            if (!data) {
                return {
                    status: 404,
                    message: 'User not found',
                };
            }

            return {
                status: 200,
                data: data.toJSON()
            };
        } catch (error) {
            return {
                status: 500,
                message: 'Internal server error',
            };
        }
    }

}