const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const uri = process.env.URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

conn.on("open", () => {
  console.log("Connected to DB...");
});

const getRoute = require("./routes/getRoutes");
app.use("/", getRoute);

app.listen(1234, () => {
  console.log("Server is running on port 1234");
});
