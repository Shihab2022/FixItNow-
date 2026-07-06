import express from "express";
import { ServicesTechniciansController } from "./servicesTechnicians.controller";
const router = express.Router();
router.get("/", ServicesTechniciansController.getAllServices);

export const ServicesTechniciansRouter = router;
