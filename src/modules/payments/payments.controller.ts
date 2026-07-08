import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../helpars/catchAsync";
import sendResponse from "../../helpars/sendResponse";
import { PaymentsService } from "./payments.service";
import { BookingsService } from "../bookings/bookings.services";

const create = catchAsync(async (req: Request, res: Response) => {
  const data = await PaymentsService.create(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment created successfully!",
    data,
  });
});
const confirm = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await PaymentsService.confirm();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment confirmed successfully!",
    data: {
      status: 200,
      message: "Payment confirmed successfully!",
    },
  });
});
const GetPaymentHistory = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await PaymentsService.GetPaymentHistory();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment history retrieved successfully!",
    data: {
      status: 200,
      message: "Payment history retrieved successfully!",
    },
  });
});
const GetPaymentDetails = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await PaymentsService.GetPaymentDetails();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment details retrieved successfully!",
    data: {
      status: 200,
      message: "Payment details retrieved successfully!",
    },
  });
});

export const PaymentsController = {
  create,
  confirm,
  GetPaymentHistory,
  GetPaymentDetails,
};
