import { ITransaction } from "../../Domain/Ports/ITransaction";
import { TransactionModel } from "../Models/MySQL/TransactionModel";

export class TransactionMySQLRepository implements ITransaction {

    async create(membershipName: string, status: string, userUUID: string, shipmentUUID: string, amount: number, transactionDate: Date): Promise<any> {
        try {
            let data;
            data = await TransactionModel.create({
                membershipName,
                status,
                userUUID,
                shipmentUUID,
                amount,
                transactionDate
            });
            console.log("I'm returing the data", data.toJSON());
            return {
                status: 201,
                data: data.toJSON()
            };
        } catch (error) {
            return {
                status: 500,
                message: `Internal server error ${error}`,
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