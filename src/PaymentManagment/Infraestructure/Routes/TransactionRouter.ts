import { Router } from "express";


import { createTransactionController, getMembershipByUserController, getShipmentByUUIDController, sendInformationAdministrationController, getAllController, sendInfoNotificationController } from "../Dependencies";


export const TransactionRouter: Router = Router();

TransactionRouter.post('/', createTransactionController.run.bind(createTransactionController));
TransactionRouter.post('/send-info-notification', sendInfoNotificationController.run.bind(sendInfoNotificationController));
TransactionRouter.get('/membership', getMembershipByUserController.run.bind(getMembershipByUserController));
TransactionRouter.get('/shipment', getShipmentByUUIDController.run.bind(getShipmentByUUIDController));
TransactionRouter.get('/', getAllController.run.bind(getAllController));
TransactionRouter.get('/send/administration', sendInformationAdministrationController.run.bind(sendInformationAdministrationController));
