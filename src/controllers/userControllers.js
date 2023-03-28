async function create(req, res) {
  const { name, email, password } = req.body;

  try {
    await userServices.create({name, email, password})

    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export default {
  create,
};
