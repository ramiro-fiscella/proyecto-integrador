const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

const express = require("express");
const router = express.Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

router.get("/login/", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;
