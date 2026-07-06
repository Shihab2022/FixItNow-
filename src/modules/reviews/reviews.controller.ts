import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../helpars/catchAsync";
import sendResponse from "../../helpars/sendResponse";
import { ReviewsService } from "./reviews.service";

const CreateReview = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await ReviewsService.CreateReview();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review created successfully!",
    data: {
      status: 200,
      message: "Review created successfully!",
    },
  });
});

export const ReviewsController = {
  CreateReview,
};
