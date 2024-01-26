const express = require("express");

const { connection } = require("./config/db.js");

const { UserRoute } = require("./controller/user_route.js");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome user");
});

app.use(UserRoute);
app.listen(process.env.Port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log("Error:" + error.message);
  }
  console.log("Running on Port");
});
