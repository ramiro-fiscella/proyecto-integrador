const express = require("express");
const server = express();
const router = require("./routes/index.js");
const morgan = require("morgan");

require("dotenv").config();
const PORT = process.env.PORT || 3001;

server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("server raised on port: " + PORT);
});
