const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');


const app = express();
const uri = process.env.URI;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

mongoose.connect(uri, {useNewUrlParser: true})

const conn = mongoose.connection

conn.on('open', () => {
  console.log('Connected to DB...')
})

//DB connection
// let conn;
// async function run() {
//   try {
//     conn = await client.connect(); 
//     console.log(conn.db)
//     console.log(conn)
//     console.log(
//       "Connected to DB."
//     );
//   } catch (err) {
//     console.log(err);
//   }
// }
// run().catch(console.dir);

const getRoute = require('./routes/getRoutes');
app.use('/',getRoute)

app.listen(1234, () => {
  console.log("Server is running on port 1234");
});
