const express = require("express");
const { MongoClient,ServerApiVersion } = require("mongodb");

const app = express();
const uri =
  "mongodb+srv://tulli:7654321@cluster0.98uyoic.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//DB connection
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Connected to DB."
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

client.connect((err) => {
  if (err) {
    console.error("Failed to connect to db", err);
    process.exit(1);
  }
  console.log("Connected to db");
});


//Server connection

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(1234, () => {
  console.log("Server is running on port 1234");
});
