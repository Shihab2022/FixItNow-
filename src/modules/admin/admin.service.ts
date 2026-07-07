import { prisma } from "../../lib/prisma";
import { CreateCategorySchema } from "../validation";

const GetAllUsers = async () => {
  return null;
};
const UpdateUserStatus = async () => {
  return null;
};
const GetAllBookings = async () => {
  return null;
};
const GetAllCategories = async () => {
  return null;
};
const CreateCategory = async (payload: {
  name: string;
  description?: string;
}) => {
  const validatedData = CreateCategorySchema.parse(payload);

  const category = await prisma.category.create({ data: validatedData });
  return category;
};

export const AdminService = {
  GetAllUsers,
  UpdateUserStatus,
  GetAllBookings,
  GetAllCategories,
  CreateCategory,
};
