import express from "express";
import { PaymentsController } from "./payments.controller";

const router = express.Router();

router.post("/create", PaymentsController.create);
router.post("/confirm", PaymentsController.confirm);
router.get("/", PaymentsController.GetPaymentHistory);
router.get("/:id", PaymentsController.GetPaymentDetails);

export const PaymentsRouter = router;
