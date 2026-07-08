import express from "express";
import { TechnicianController } from "./technician.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.put("/profile", auth(), TechnicianController.UpdateProfile);
router.put("/availability", auth(), TechnicianController.UpdateAvailability);
router.get("/bookings", auth(), TechnicianController.GetBookingHistory);
router.patch("/bookings/:id", auth(), TechnicianController.UpdateBookingStatus);

export const TechnicianRouter = router;
