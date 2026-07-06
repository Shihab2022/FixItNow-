import express from "express";
import { BookingsController } from "./bookings.controller";
const router = express.Router();
router.post("/", BookingsController.CreateNewBooking);
router.get("/", BookingsController.GetUserBookings);
router.get("/:id", BookingsController.GetBookingDetails);

export const BookingsRouter = router;
