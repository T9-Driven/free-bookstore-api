async function create(req, res) {
  const { name, author } = req.body;

  try {
    
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export default { create };
