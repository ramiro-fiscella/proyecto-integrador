let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((fav) => fav.id != id);

  return res.status(200).json(myFavorites);
};

// Función para filtrar personajes favoritos por género
const filterByGender = (req, res) => {
  const { gender } = req.query; // Cambiar a req.query
  const filteredFavorites = myFavorites.filter((fav) => fav.gender == gender); // Filtrar por género
  res.json(filteredFavorites); // Devolver los personajes filtrados en formato JSON
};

// Función para filtrar los personajes favoritos por estado
const filterByStatus = (req, res) => {
  const { status } = req.query;
  const filteredFavorites = myFavorites.filter((fav) => fav.status === status); // Filtrar por estado
  res.json(filteredFavorites); // Devolver los personajes filtrados en formato JSON
};

// Función para ordenar la lista de personajes favoritos
const orderFavorites = (req, res) => {
  const { order } = req.query;
  const sortedFavorites = myFavorites.sort((a, b) => {
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
  deleteFav,
  filterByGender,
  filterByStatus,
  orderFavorites,
};
