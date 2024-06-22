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
}

TransactionModel.init({
    idTransaction: { 
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
    userIUID: { 
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
    }
}, { 
    modelName: 'transaction', 
    timestamps: false, 
    sequelize 
});
