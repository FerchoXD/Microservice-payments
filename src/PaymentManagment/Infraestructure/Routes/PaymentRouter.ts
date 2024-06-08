import { Router } from "express";
import { createPaymentsController, getPaymentsController, updatePaymentsController } from '../Dependencies';

export const router:Router = Router();

router.get("/", getPaymentsController.run.bind(getPaymentsController));
router.post("/", createPaymentsController.run.bind(createPaymentsController));
router.put("/:UUID", updatePaymentsController.run.bind(updatePaymentsController));
