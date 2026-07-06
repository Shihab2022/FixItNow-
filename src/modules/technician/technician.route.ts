import express from "express";
import { TechnicianController } from "./technician.controller";

const router = express.Router();

router.put("/profile", TechnicianController.UpdateProfile);
router.put("/availability", TechnicianController.UpdateAvailability);
router.get("/bookings", TechnicianController.GetBookingHistory);
router.patch("/bookings/:id", TechnicianController.UpdateBookingStatus);

export const TechnicianRouter = router;
