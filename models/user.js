const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  hashedPassword: String,
});

module.exports = mongoose.model("user", userSchema);
