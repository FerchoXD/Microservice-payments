import { Router } from "express";
import { createTransactionController, getMembershipByUserController, getShipmentByUUIDController, sendInformationAdministrationController } from "../Dependencies";

export const TransactionRouter: Router = Router();

TransactionRouter.post('/', createTransactionController.run.bind(createTransactionController));
TransactionRouter.get('/membership', getMembershipByUserController.run.bind(getMembershipByUserController));
TransactionRouter.get('/shipment', getShipmentByUUIDController.run.bind(getShipmentByUUIDController));

TransactionRouter.get('/send/administration', sendInformationAdministrationController.run.bind(sendInformationAdministrationController));