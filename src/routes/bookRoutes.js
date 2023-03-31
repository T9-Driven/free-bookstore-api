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
bookRoutes.get("/", authMiddleware.authValidation, bookControllers.findAll);
bookRoutes.post(
  "/take-book/:id",
  authMiddleware.authValidation,
  bookControllers.takeBook
);
bookRoutes.get(
  "/my-books",
  authMiddleware.authValidation,
  bookControllers.findAllMyBooks
);

export default bookRoutes;
