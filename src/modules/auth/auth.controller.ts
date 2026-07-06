import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../helpars/catchAsync";
import sendResponse from "../../helpars/sendResponse";
import { AuthServices } from "./auth.service";

const register = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await AuthServices.register();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User registered successfully!",
    data: {
      status: 200,
      message: "User registered successfully!",
    },
  });
});
const login = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await AuthServices.login();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully!",
    data: {
      status: 200,
      message: "User logged in successfully!",
    },
  });
});
const getMe = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await AuthServices.getMe();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User details retrieved successfully!",
    data: {
      status: 200,
      message: "User details retrieved successfully!",
    },
  });
});

export const AuthController = {
  register,
  login,
  getMe,
};
