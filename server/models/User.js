const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

const model = mongoose.model("User", userSchema);

module.exports = model;
