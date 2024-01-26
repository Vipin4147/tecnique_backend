const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Department: { type: String, required: true },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = {
  UserModel,
};
