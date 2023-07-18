const { login } = require("../controllers/login");
<<<<<<< Updated upstream
const { getCharById } = require("../controllers/getCharById");
const {
  postFav,
  deleteFav,
  filterByGender,
  filterByStatus,
  orderFavorites,
=======
const {
  postFav,
  deleteFav,
  getFavs,
>>>>>>> Stashed changes
} = require("../controllers/handleFavorites");

const express = require("express");
const router = express.Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

router.get("/login/", login);

router.post("/fav", postFav);

router.get("/fav/filter/gender", filterByGender);

router.get("/fav/filter/status", filterByStatus);

router.get("/fav/order", orderFavorites);

router.delete("/fav/:id", deleteFav);

router.post("/fav", postFav);
router.get("/fav", getFavs);

router.delete("/fav/:id", deleteFav);

module.exports = router;
