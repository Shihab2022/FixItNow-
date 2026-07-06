import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../helpars/catchAsync";
import sendResponse from "../../helpars/sendResponse";
import { TechnicianService } from "./technician.service";

const UpdateProfile = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await TechnicianService.UpdateProfile();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile updated successfully!",
    data: {
      status: 200,
      message: "Profile updated successfully!",
    },
  });
});
const UpdateAvailability = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await TechnicianService.UpdateAvailability();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Availability updated successfully!",
    data: {
      status: 200,
      message: "Availability updated successfully!",
    },
  });
});
const GetBookingHistory = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await TechnicianService.GetBookingHistory();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking history retrieved successfully!",
    data: {
      status: 200,
      message: "Booking history retrieved successfully!",
    },
  });
});
const UpdateBookingStatus = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await TechnicianService.UpdateBookingStatus();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking status updated successfully!",
    data: {
      status: 200,
      message: "Booking status updated successfully!",
    },
  });
});

export const TechnicianController = {
  UpdateProfile,
  UpdateAvailability,
  GetBookingHistory,
  UpdateBookingStatus,
};
