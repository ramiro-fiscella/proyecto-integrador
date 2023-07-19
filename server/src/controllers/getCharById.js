const axios = require("axios");
const URL = process.env;

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`${URL}/${id}`);
    const { id, status, name, species, origin, image, gender } = response.data;

    if (name) {
      const character = {
        id,
        status,
        name,
        species,
        origin,
        image,
        gender,
      };

      return res.status(200).json(character);
    }
    return res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharById;
