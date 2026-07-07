import { Role } from "../../../generated/prisma/browser";
import ApiError from "../../helpars/ApiError";
import { IAuthUser } from "../../types";
import httpStatus from "http-status";
import { CreateServiceSchema } from "../validation";
import { prisma } from "../../lib/prisma";

const getAllTechnicians = async () => {
  return null;
};

const getAllCategories = async () => {
  return null;
};

const getAllServices = async () => {
  return null;
};
const getTechnicianProfile = async () => {
  return null;
};
const createService = async (req: any) => {
  const user = req.user;
  const payload = req.body;
  if (user?.role !== Role.TECHNICIAN) {
    throw new ApiError(
      httpStatus.FORBIDDEN,
      "Only technicians can create services",
    );
  }

  const validatedData = CreateServiceSchema.parse(payload);
  const service = await prisma.service.create({
    data: {
      ...validatedData,
      technicianId: user.id, // Set automatically from JWT payload authentication
    },
  });

  return service;
};

export const ServicesTechniciansService = {
  getAllTechnicians,
  getAllCategories,
  getAllServices,
  getTechnicianProfile,
  createService,
};
