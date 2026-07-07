import ApiError from "../../helpars/ApiError";
import { prisma } from "../../lib/prisma";
import httpStatus from "http-status";
import { CreateBookingSchema } from "../validation";
import { Role } from "../../../generated/prisma/browser";
const CreateNewBooking = async (req: any) => {
  const payload = req.body;
  const user = req.user;
  if (user?.role !== Role.CUSTOMER) {
    throw new ApiError(
      httpStatus.FORBIDDEN,
      "Only customers can create bookings",
    );
  }
  const validatedData = CreateBookingSchema.parse(payload);
  const booking = await prisma.booking.create({
    data: {
      ...validatedData,
      customerId: user.id,
      status: "REQUESTED",
    },
  });
  return booking;
};

const GetUserBookings = async () => {
  return null;
};

const GetBookingDetails = async () => {
  return null;
};

export const BookingsService = {
  CreateNewBooking,
  GetUserBookings,
  GetBookingDetails,
};
