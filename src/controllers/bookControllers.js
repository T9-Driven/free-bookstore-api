import bookServices from "../services/bookServices.js";

async function create(req, res, next) {
  const { name, author } = req.body;

  const { id } = res.locals.user;
  try {
    await bookServices.create({ name, author, userId: id });

    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function findAll(req, res, next) {
  try {
    const books = await bookServices.findAll();

    return res.send({ books });
  } catch (err) {
    next(err);
  }
}

async function takeBook(req, res, next) {
  const { id } = res.locals.user;
  const bookId = +req.params.id;
  try {
    await bookServices.takeBook(id, bookId);
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

export default { create, findAll, takeBook };
