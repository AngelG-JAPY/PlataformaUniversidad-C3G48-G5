const mongoose = require("mongoose");

const contactoSchema = mongoose.Schema({
  name: String,
  email: String,
  description: String,
});

module.exports = mongoose.model("Home", contactoSchema);
