import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";
import { userSchemma } from "../schemas/User.js";

const userRoutes = Router();

userRoutes.post('/', validateSchema(userSchemma) , userControllers.create)

export default userRoutes;
