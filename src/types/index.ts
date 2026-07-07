import { Role } from "../../generated/prisma/browser";

export type RegisterUserPayload = {
  email: string;
  password: string;
  name: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  phone?: string;
  address?: string;
};

export type IAuthUser = {
  name: string;
  role: Role;
  id: string;
} | null;
