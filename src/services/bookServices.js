import bookRepositories from "../repositories/bookRepositories.js";

async function create({ name, author, userId }) {
  const {
    rows: [book],
  } = await bookRepositories.findByName(name);
  if (book) throw new Error("Book already exists");

  await bookRepositories.create({ name, author, userId });
}

export default { create };
