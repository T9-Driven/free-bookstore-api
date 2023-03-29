import { Router } from "express";
import bookControllers from "../controllers/bookControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { bookSchemma } from "../schemas/Book.js";

const bookRoutes = Router();

bookRoutes.post(
  "/",
  authMiddleware.authValidation,
  validateSchema(bookSchemma),
  bookControllers.create
);

export default bookRoutes;
