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
let db;
async function run() {
  try {
    await client.connect();
    db = client.db("pickbook")
    
    console.log(
      "Connected to DB."
    );
  } catch (err) {
    console.log(err);
  }
}
run().catch(console.dir);


const getRoute = require('./routes/getRoutes');
app.use('/',getRoute)

app.listen(1234, () => {
  console.log("Server is running on port 1234");
});


//exports
module.exports={
  db,app
}
