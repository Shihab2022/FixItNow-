import express from "express";
import { AdminController } from "./admin.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/users", auth(), AdminController.GetAllUsers);
router.patch("/users/:id", auth(), AdminController.UpdateUserStatus);
router.get("/bookings", auth(), AdminController.GetAllBookings);
router.get("/categories", auth(), AdminController.GetAllCategories);
router.post("/categories", auth(), AdminController.CreateCategory);

export const AdminRouter = router;
