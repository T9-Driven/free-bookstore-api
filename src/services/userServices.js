import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";
import { v4 as uuidV4 } from "uuid";

async function create({ name, email, password }) {
  const { rowCount } = await userRepositories.findByEmail(email);
  if (rowCount) throw new Error("User already exists");

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.create({ name, email, password: hashPassword });
}

async function signin({ email, password }) {
  const {
    rowCount,
    rows: [user],
  } = await userRepositories.findByEmail(email);
  if (!rowCount) throw new Error("Incorrect email or password");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error("Incorrect email or password");

  const token = uuidV4();
  await userRepositories.createSession({ token, userId: user.id });

  return token;
}

export default {
  create,
  signin,
};
