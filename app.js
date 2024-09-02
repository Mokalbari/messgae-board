const express = require("express");
const dotenv = require("dotenv");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, () =>
  console.log(`server running on port: http://localhost:${PORT}`)
);
