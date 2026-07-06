import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "./../../helpars/catchAsync";
import sendResponse from "./../../helpars/sendResponse";
import { ServicesTechniciansService } from "./servicesTechnicians.service";
import { AuthServices } from "../auth/auth.service";

const getAllTechnicians = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await ServicesTechniciansService.getAllTechnicians();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "getAllTechnicians successfully!",
    data: {
      status: 200,
      message: "getAllTechnicians successfully!",
    },
  });
});
const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await ServicesTechniciansService.getAllCategories();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "getAllCategories successfully!",
    data: {
      status: 200,
      message: "getAllCategories successfully!",
    },
  });
});
const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await ServicesTechniciansService.getAllServices();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "getAllServices successfully!",
    data: {
      status: 200,
      message: "getAllServices successfully!",
    },
  });
});
const getTechnicianProfile = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization || "";

  await ServicesTechniciansService.getTechnicianProfile();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Technician profile retrieved successfully!",
    data: {
      status: 200,
      message: "Technician profile retrieved successfully!",
    },
  });
});

export const ServicesTechniciansController = {
  getAllTechnicians,
  getAllCategories,
  getAllServices,
  getTechnicianProfile,
};
