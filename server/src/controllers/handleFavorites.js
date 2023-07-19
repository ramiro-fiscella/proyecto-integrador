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
// const getFavs = (req, res) => {
//   return res.status(200).json(favs);
// };
const getFavs = (req, res) => {
  return res.status(200).json(favs);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  favs = favs.filter((char) => char.id != id);
  return res.status(200).json(favs);
};

// Función para filtrar personajes favoritos por género
const filterByGender = (req, res) => {
  const { gender } = req.query; // Cambiar a req.query
  const filteredFavorites = favs.filter((fav) => fav.gender == gender); // Filtrar por género
  res.json(filteredFavorites); // Devolver los personajes filtrados en formato JSON
};

// Función para filtrar los personajes favoritos por estado
const filterByStatus = (req, res) => {
  const { status } = req.query;
  const filteredFavorites = favs.filter((fav) => fav.status === status); // Filtrar por estado
  res.json(filteredFavorites); // Devolver los personajes filtrados en formato JSON
};

// Función para ordenar la lista de personajes favoritos
const orderFavorites = (req, res) => {
  const { order } = req.query;
  const sortedFavorites = favs.sort((a, b) => {
    // Ordenar según el valor del campo 'name' en orden ascendente o descendente
    if (order === "A") {
      return a.name.localeCompare(b.name);
    } else if (order === "D") {
      return b.name.localeCompare(a.name);
    } else {
      // Si no se especifica un orden válido, devolver el array sin cambios
      return 0;
    }
  });

  res.json(sortedFavorites); // Devolver la lista de favoritos ordenada en formato JSON
};

module.exports = {
  postFav,
  getFavs,
  deleteFav,
  filterByGender,
  filterByStatus,
  orderFavorites,
};
