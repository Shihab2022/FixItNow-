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
  const categories = await prisma.category.findMany();
  return categories;
};

const getAllServices = async () => {
  const services = await prisma.service.findMany();
  return services;
};
const getTechnicianProfile = async (technicianId: string) => {
  const user = await prisma.technicianProfile.findUnique({
    where: { id: technicianId },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          address: true,
          role: true,
          emailVerified: true,
          createdAt: true,
          updatedAt: true,
          // password is intentionally omitted
        },
      },
    },
  });
  return user;
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
