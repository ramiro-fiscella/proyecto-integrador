const { getCharById } = require("../controllers/getCharById");

const express = require("express");
const router = express.Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

// router.get("/login/", login);

// router.post("/fav", postFav);

// router.delete("/fav/:id", deleteFav);

module.exports = router;
