import express from "express";
import { AuthRouter } from "../modules/auth/auth.routes";
import { ServicesTechniciansRouter } from "../modules/servicesTechnicians/services.routes";
import { TechniciansRouter } from "../modules/servicesTechnicians/technicians.route";
import { CategoriesRouter } from "../modules/servicesTechnicians/categoriesRouter.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    endPoint: AuthRouter,
  },
  {
    path: "/services",
    endPoint: ServicesTechniciansRouter,
  },
  {
    path: "/technicians",
    endPoint: TechniciansRouter,
  },
  {
    path: "/categories",
    endPoint: CategoriesRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.endPoint));
export const rootRouter = router;
