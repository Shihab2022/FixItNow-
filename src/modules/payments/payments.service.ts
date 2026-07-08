import { PaymentStatus } from "../../../generated/prisma/client";
import ApiError from "../../helpars/ApiError";
import { prisma } from "../../lib/prisma";
import httpStatus from "http-status";
import { ssl } from "../SSL/ssl.service";

const create = async (appointmentDetails: any) => {
  const { bookingId } = appointmentDetails;
  const paymentData = await prisma.booking.findFirst({
    where: {
      id: bookingId,
    },
    include: {
      customer: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          address: true,
        },
      },
      payment: true,
    },
  });
  if (!paymentData) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Payment information not found!",
    );
  }

  if (paymentData.status === PaymentStatus.COMPLETED) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Payment has already been made for this booking!",
    );
  }
  if (!paymentData.payment) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Payment information not found!",
    );
  }
  const paymentSession = await ssl.initPayment({
    amount: paymentData.totalPrice,
    name: paymentData.customer.name,
    transactionId: paymentData.payment.transactionId,
    email: paymentData.customer.email,
    address: paymentData.customer.address,
    phoneNumber: paymentData.customer.phone,
  });

  return {
    paymentUrl: paymentSession.GatewayPageURL,
  };
};

const confirm = async () => {
  return null;
};

const GetPaymentHistory = async () => {
  return null;
};
const GetPaymentDetails = async () => {
  return null;
};

export const PaymentsService = {
  create,
  confirm,
  GetPaymentHistory,
  GetPaymentDetails,
};
