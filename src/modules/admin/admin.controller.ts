import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../helpars/catchAsync";
import sendResponse from "../../helpars/sendResponse";
import { AdminService } from "./admin.service";

const GetAllUsers = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await AdminService.GetAllUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully!",
    data: {
      status: 200,
      message: "Users retrieved successfully!",
    },
  });
});
const UpdateUserStatus = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await AdminService.UpdateUserStatus();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully!",
    data: {
      status: 200,
      message: "Users retrieved successfully!",
    },
  });
});
const GetAllBookings = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await AdminService.GetAllBookings();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully!",
    data: {
      status: 200,
      message: "Users retrieved successfully!",
    },
  });
});
const GetAllCategories = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await AdminService.GetAllCategories();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories retrieved successfully!",
    data: {
      status: 200,
      message: "Categories retrieved successfully!",
    },
  });
});
const CreateCategory = catchAsync(async (req: Request, res: Response) => {
  const data = await AdminService.CreateCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category created successfully!",
    data,
  });
});

export const AdminController = {
  GetAllUsers,
  UpdateUserStatus,
  GetAllBookings,
  GetAllCategories,
  CreateCategory,
};
