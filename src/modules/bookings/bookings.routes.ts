import express from "express";
import { BookingsController } from "./bookings.controller";
import auth from "../../middlewares/auth";
const router = express.Router();
router.post("/", auth(), BookingsController.CreateNewBooking);
router.get("/", auth(), BookingsController.GetUserBookings);
router.get("/:id", auth(), BookingsController.GetBookingDetails);

export const BookingsRouter = router;
