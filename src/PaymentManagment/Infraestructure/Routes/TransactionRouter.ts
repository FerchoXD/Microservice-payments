import { Router } from "express";
import { createTransactionController, getMembershipByUserController, getShipmentByUUIDController } from "../Dependencies";

export const TransactionRouter: Router = Router();

TransactionRouter.post('/', createTransactionController.run.bind(createTransactionController));
TransactionRouter.get('/membership', getMembershipByUserController.run.bind(getMembershipByUserController));
TransactionRouter.get('/shipment', getShipmentByUUIDController.run.bind(getShipmentByUUIDController));