import { Router } from "express";
import { createPaymentsController, getPaymentsController, updatePaymentsController as updatePaymentsControllerPromise } from '../Dependencies';

export const router:Router = Router();

router.get("/", getPaymentsController.run.bind(getPaymentsController));
router.post("/", createPaymentsController.run.bind(createPaymentsController));
router.put("/:UUID", updatePaymentsControllerPromise.run.bind(updatePaymentsControllerPromise));

// Ruta para actualizar un pago por UUID
router.put("/:UUID", async (req, res) => {
    try {
        const response = await updatePaymentsControllerPromise.run.bind(req.params.UUID, req.body);
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error);
    }
});