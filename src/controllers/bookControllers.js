import bookServices from "../services/bookServices.js";

async function create(req, res) {
  const { name, author } = req.body;

  const { id } = res.locals.user;
  try {
    await bookServices.create({ name, author, userId: id });

    return res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function findAll(req, res) {
  try {
    const books = await bookServices.findAll();

    return res.json(books);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default { create, findAll };
