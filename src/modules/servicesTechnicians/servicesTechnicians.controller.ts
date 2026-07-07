import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../helpars/catchAsync";
import sendResponse from "../../helpars/sendResponse";
import { ServicesTechniciansService } from "./servicesTechnicians.service";
import { IAuthUser } from "../../types";

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
  const data = await ServicesTechniciansService.getAllCategories();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Categories retrieved successfully!",
    data,
  });
});
const getAllServices = catchAsync(async (req: Request, res: Response) => {
  const data = await ServicesTechniciansService.getAllServices();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Services retrieved successfully!",
    data,
  });
});
const getTechnicianProfile = catchAsync(async (req: Request, res: Response) => {
  const data = await ServicesTechniciansService.getTechnicianProfile(
    req.params.id as string,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Technician profile retrieved successfully!",
    data,
  });
});
const createService = catchAsync(
  async (req: Request & { user?: IAuthUser }, res: Response) => {
    const data = await ServicesTechniciansService.createService(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Service created successfully!",
      data,
    });
  },
);

export const ServicesTechniciansController = {
  getAllTechnicians,
  getAllCategories,
  getAllServices,
  getTechnicianProfile,
  createService,
};
