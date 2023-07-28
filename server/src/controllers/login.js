const { User } = require("../db/DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send("Faltan datos");

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) return res.status(404).send("Usuario no encontrado");

    user.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).send("Contraseña incorrecta");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = login;
