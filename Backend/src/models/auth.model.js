const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  insta: {
    type: String,
    default: "",
  },
  linkedin: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
