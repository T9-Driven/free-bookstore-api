import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";

async function create({ name, email, password }) {
  const { rowsCount } = await userRepositories.findByEmail(email);
  if (rowsCount) return "Vai da não, to mó cansado";

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.create({ name, email, password: hashPassword });
}

export default {
  create,
};
