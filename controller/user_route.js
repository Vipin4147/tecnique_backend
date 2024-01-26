const express = require("express");

const UserRoute = express.Router();
const { UserModel } = require("../models/user_model.js");

UserRoute.get("/users", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.send(400).json({ error: error.message });
  }
});

UserRoute.post("/users", async (req, res) => {
  let { FirstName, LastName, Email, Department } = req.body;

  try {
    await UserModel.insertMany([{ FirstName, LastName, Email, Department }]);
    res.json("User added successfully");
  } catch (error) {
    res.status(404).json(error);
  }
});

UserRoute.patch("/users/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    const data = await UserModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send("Msg: data updated successfully");
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});

UserRoute.delete("/users/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await UserModel.findByIdAndDelete({ _id: ID });
    res.send("Msg: data deleted successfully");
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
});

module.exports = {
  UserRoute,
};
