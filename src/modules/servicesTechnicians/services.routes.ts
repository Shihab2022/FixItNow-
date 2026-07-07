import express from "express";
import { ServicesTechniciansController } from "./servicesTechnicians.controller";
import auth from "../../middlewares/auth";
const router = express.Router();
router.get("/", ServicesTechniciansController.getAllServices);
router.post("/", auth(), ServicesTechniciansController.createService);

export const ServicesTechniciansRouter = router;
