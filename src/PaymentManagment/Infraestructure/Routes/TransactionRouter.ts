import { Router } from "express";
import { createTransactionController, getAllController, getMembershipByUserController, getShipmentByUUIDController } from "../Dependencies";

export const TransactionRouter: Router = Router();

TransactionRouter.post('/', createTransactionController.run.bind(createTransactionController));
TransactionRouter.get('/membership', getMembershipByUserController.run.bind(getMembershipByUserController));
TransactionRouter.get('/shipment', getShipmentByUUIDController.run.bind(getShipmentByUUIDController));
TransactionRouter.get('/', getAllController.run.bind(getAllController));