const { User } = require("../db/DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return resizeBy.status(400).send("Faltan datos");

    const user = await User.findOrCreate({
      where: {
        email,
        password,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    return resizeBy.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
