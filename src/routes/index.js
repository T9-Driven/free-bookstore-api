import { Router } from "express";
import bookRoutes from "./bookRoutes.js";
import userRoutes from "./userRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/books", bookRoutes);

export default routes;
