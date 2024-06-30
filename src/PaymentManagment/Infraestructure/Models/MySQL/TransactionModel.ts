import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";

export class TransactionModel extends Model {
    uuid!: string;
    membershipName!: string;
    status!: string;
    userUUID!: string;
    shipmentUUID!: string;
    amount!: number;
    transactionDate!: Date;
    promotion!: string;
    orderUUID!: string;
    email!: string;
}

TransactionModel.init({
    uuid: { 
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true 
    },
    membershipName: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    status: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    userUUID: { 
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4, 
        allowNull: false 
    },
    shipmentUUID: { 
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        allowNull: false 
    },
    amount: { 
        type: DataTypes.FLOAT, 
        allowNull: false 
    },
    transactionDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    promotion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    orderUUID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { 
    modelName: 'transaction', 
    timestamps: false, 
    sequelize 
});
