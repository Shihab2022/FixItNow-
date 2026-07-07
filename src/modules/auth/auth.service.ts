import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import { RegisterUserPayload } from "../../types";
import config from "../../config";

const register = async (payload: RegisterUserPayload) => {
  const { email, password, name, role, phone, address } = payload;

  // Validate if user exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("User with this email already exists.");
  }

  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );

  // Dynamic database payload construction based on role choice
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role,
      phone,
      address,
      technicianProfile:
        role === "TECHNICIAN"
          ? { create: { experience: 0, skills: [] } }
          : undefined,
    },
    include: {
      technicianProfile: true,
    },
  });

  // Strip sensitive password out before responding
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

const login = async () => {
  return null;
};

const getMe = async () => {
  return null;
};

export const AuthServices = {
  register,
  login,
  getMe,
};
