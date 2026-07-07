import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../helpars/catchAsync";
import sendResponse from "../../helpars/sendResponse";
import { BookingsService } from "./bookings.services";
import { IAuthUser } from "../../types";

const CreateNewBooking = catchAsync(
  async (req: Request & { user?: IAuthUser }, res: Response) => {
    const data = await BookingsService.CreateNewBooking(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "New booking created successfully!",
      data,
    });
  },
);
const GetUserBookings = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await BookingsService.GetUserBookings();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User bookings retrieved successfully!",
    data: {
      status: 200,
      message: "User bookings retrieved successfully!",
    },
  });
});
const GetBookingDetails = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await BookingsService.GetBookingDetails();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking details retrieved successfully!",
    data: {
      status: 200,
      message: "Booking details retrieved successfully!",
    },
  });
});

export const BookingsController = {
  CreateNewBooking,
  GetUserBookings,
  GetBookingDetails,
};
