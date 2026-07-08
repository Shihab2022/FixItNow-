import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET!,
  reset_access_secret: process.env.RESET_PASS_ACCESS_SECRET!,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET!,
  jwt_access_expire_in: process.env.JWT_ACCESS_EXPIRES_IN,
  reset_pass_access_expire_in: process.env.RESET_PASS_ACCESS_EXPIRES_IN,
  jwt_refresh_expire_in: process.env.JWT_REFRESH_EXPIRES_IN,
  reset_pass_base_link: process.env.RESET_PASS_BASE_LINK,
  emailSender: {
    email: process.env.SENDER_EMAIL,
    password: process.env.APP_PASSWORD,
  },
  cloudinary: {
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
  ssl: {
    store_id: process.env.STORE_ID,
    store_passwd: process.env.STORE_PASS,
    sslPaymentApi: process.env.SSL_PAYMENT_API,
    success_url: process.env.SUCCESS_URL,
    fail_url: process.env.FAIL_URL,
    cancel_url: process.env.CANCEL_URL,
    sslValidationApi: process.env.SSL_VALIDATION_API,
  },
  ai: {
    hugging_face_token: process.env.HUGGING_FACE_TOKEN,
  },
};
