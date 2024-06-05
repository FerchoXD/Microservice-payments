import { PaymentMethodModel } from "../../../PaymentManagment/Infraestructure/Models/MySQL/PaymentMethodModel";
import { PaymentModel } from "../../../PaymentManagment/Infraestructure/Models/MySQL/PaymentModel";
import { TransactionModel } from "../../../PaymentManagment/Infraestructure/Models/MySQL/TransactionModel";

PaymentModel.belongsTo(PaymentMethodModel, { foreignKey: 'paymentMethodUUID', targetKey: 'uuid' });
PaymentModel.belongsTo(TransactionModel, { foreignKey: 'transactionUUID', targetKey: 'uuid' });
TransactionModel.hasOne(PaymentModel, { foreignKey: 'transactionUUID' });
PaymentMethodModel.hasMany(PaymentModel, { foreignKey: 'paymentMethodUUID' });