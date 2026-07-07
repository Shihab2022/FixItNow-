export type RegisterUserPayload = {
  email: string;
  password: string;
  name: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  phone?: string;
  address?: string;
};
