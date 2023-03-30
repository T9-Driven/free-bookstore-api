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

export default { create };
