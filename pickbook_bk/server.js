const express = require("express");
const { MongoClient,ServerApiVersion } = require("mongodb");
require('dotenv').config();



const app = express();
const uri = process.env.URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//DB connection
let conn;
async function run() {
  try {
    conn = await client.connect();
    console.log(
      "Connected to DB."
    );
  } catch (err) {
    console.log(err);
  }
}
run().catch(console.dir);
let db = conn.db("pickbook")

//Server connection

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(1234, () => {
  console.log("Server is running on port 1234");
});
