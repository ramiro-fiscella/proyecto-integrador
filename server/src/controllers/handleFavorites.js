let favs = require("../utils/favs");

// const postFav = async (req, res) => {
//   const character = req.body;
//   const characterExists = favs.some((fav) => fav.id === character.id);
//   if (characterExists) {
//     return res
//       .status(403)
//       .json({ error: "El personaje ya está en la lista de favoritos." });
//   }

//   try {
//     const addedCharacter = await addFav(character);
//     return res.status(201).json(addedCharacter.payload);
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ error: "Error al agregar el personaje a favoritos." });
//   }
// };

const postFav = (req, res) => {
  const character = req.body;
  const characterExists = favs.some((fav) => fav.id === character.id);
  if (characterExists) {
    return res
      .status(403)
      .json({ error: "El personaje ya está en la lista de favoritos." });
  }
  favs.push(character);
  return res.status(201).json(favs);
};

const getFavs = (req, res) => {
  return res.status(200).json(favs);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  favs = favs.filter((char) => char.id != id);
  return res.status(200).json(favs);
};

module.exports = {
  postFav,
  getFavs,
  deleteFav,
};
