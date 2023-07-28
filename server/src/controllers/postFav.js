const { Favorite } = require("../db/DB_connection");

const postFav = async (req, res) => {
  try {
    const { name, status, gender, origin, species, image } = req.body;

    if (!name || !status || !gender || !origin || !species || !image) {
      return res.status(401).send("Faltan datos");
    }

    await Favorite.findOrCreate({
      where: {
        name,
        status,
        gender,
        origin,
        species,
        image,
      },
    });
    const allFavorites = await Favorite.findAll();
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
