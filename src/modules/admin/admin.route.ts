import express from "express";
import { AdminController } from "./admin.controller";

const router = express.Router();

router.get("/users", AdminController.GetAllUsers);
router.patch("/users/:id", AdminController.UpdateUserStatus);
router.get("/bookings", AdminController.GetAllBookings);
router.get("/categories", AdminController.GetAllCategories);
router.post("/categories", AdminController.CreateCategory);

export const AdminRouter = router;
