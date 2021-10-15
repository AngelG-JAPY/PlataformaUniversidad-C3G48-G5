const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombre: String,
  apellido: String,
  correo: String,
  contraseña: String,
  role: String,
  favoritos: Array,
});

module.exports = mongoose.model("User", userSchema);
