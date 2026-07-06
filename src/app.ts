import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { rootRouter } from "./routes/index";
// import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { corsAllowOrigin } from "./constant";
import { notFound, testingRoute } from "./middlewares/notFound";
const app = express();

app.use(cors(corsAllowOrigin));
app.use(express.json());
app.use(cookieParser());

app.get("/", testingRoute);
app.use("/api/v1", rootRouter);
// app.use(globalErrorHandler);

app.use(notFound);
export default app;
