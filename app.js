const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("je suis sur /");
});

app.listen(PORT, () =>
  console.log(`server running on port: http://localhost:${PORT}`)
);
