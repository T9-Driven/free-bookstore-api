import { Router } from "express";
import userControllers from "../controllers/userControllers.js";

const userRoutes = Router();

userRoutes.post('/', userControllers.create)

export default userRoutes;
