import { conflictError } from "../errors/index.js";
import bookRepositories from "../repositories/bookRepositories.js";

async function create({ name, author, userId }) {
  const {
    rows: [book],
  } = await bookRepositories.findByName(name);
  if (book) throw conflictError("Book already exists");

  await bookRepositories.create({ name, author, userId });
}

async function findAll() {
  const { rows, rowCount } = await bookRepositories.findAll();
  if (!rowCount) throw notFoundError();
  return rows;
}

export default { create, findAll };
