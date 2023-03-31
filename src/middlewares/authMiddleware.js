import errors from "../errors/index.js";
import userRepositories from "../repositories/userRepositories.js";
import jwt from "jsonwebtoken";

async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) throw errors.unauthorizedError();

  const parts = authorization.split(" ");
  if (parts.length !== 2) throw errors.unauthorizedError();

  const [schema, token] = parts;
  if (schema !== "Bearer") throw errors.unauthorizedError();

  jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
    try {
      if (error) throw errors.unauthorizedError();

      const {
        rows: [user],
      } = await userRepositories.findById(decoded.userId);

      if (!user) throw errors.unauthorizedError();

      res.locals.user = user;

      next();
    } catch (err) {
      next(err);
    }
  });
}

export default { authValidation };
