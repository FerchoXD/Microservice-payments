import { ITransaction } from "../../Domain/Ports/ITransaction";
import { TransactionModel } from "../Models/MySQL/TransactionModel";

export class TransactionMySQLRepository implements ITransaction {

    async create(membershipName: string, status: string, userUUID: string, shipmentUUID: string, amount: number, date: Date): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async getMembershipByUser(userUUID: string): Promise<any> {
        try {
            const data = await TransactionModel.findOne({
                where: { userIUID: userUUID },
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
                where: { userIUID: shipmentUUID },
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