import { prisma } from "../../lib/prisma";

const UpdateProfile = async (id: string, payload: any) => {
  const updateData = Object.fromEntries(
    Object.entries(payload).filter(([_, value]) => value !== undefined),
  );

  const result = await prisma.technicianProfile.update({
    where: {
      userId: id,
    },
    data: updateData,
  });

  return result;
};

const UpdateAvailability = async () => {
  return null;
};

const GetBookingHistory = async () => {
  return null;
};
const UpdateBookingStatus = async () => {
  return null;
};

export const TechnicianService = {
  UpdateProfile,
  UpdateAvailability,
  GetBookingHistory,
  UpdateBookingStatus,
};
