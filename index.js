const express = require("express");
const app = express();

const PORT = 3000;

require("dotenv").config();

console.log(process.env.TEST_VAR);
const client = require("./db/client");
client.connect();


app.use(express.json());
// we're registering the routes in /api/index.js ===> IOW, request to /api ---> send request to /api/index.js
app.use("/api", require("./api"));

app.get("/", (req, res) => {
  res.send("Hello from our server");
});

app.listen(PORT, () => {
  console.log(`Server alive on port ${PORT}`);
});