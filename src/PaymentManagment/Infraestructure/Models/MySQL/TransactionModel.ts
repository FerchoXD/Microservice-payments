import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";

export class TransactionModel extends Model {
    uuid!:string;
    reference!:string;
    transactionDate!:Date;
    state!:string;

    paymentUUID!:string;
}

TransactionModel.init({
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    reference: { type: DataTypes.STRING, allowNull: false },
    transactionDate: { type: DataTypes.DATE, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false }
}, { modelName: 'transaction', timestamps: false, sequelize });