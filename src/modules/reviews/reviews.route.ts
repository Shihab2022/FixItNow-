import express from "express";
import { ReviewsController } from "./reviews.controller";

const router = express.Router();

router.post("/", ReviewsController.CreateReview);

export const ReviewsRouter = router;
