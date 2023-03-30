import bookRepositories from "../repositories/bookRepositories.js";

async function create({ name, author, userId }) {
  const {
    rows: [book],
  } = await bookRepositories.findByName(name);
  if (book) throw new Error("Book already exists");

  await bookRepositories.create({ name, author, userId });
}

async function findAll() {
  const { rows, rowCoutn } = await bookRepositories.findAll();
  if (!rowCoutn) throw new Error("Not found");
  return rows;
}

export default { create, findAll };
