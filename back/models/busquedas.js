const mongoose = require("mongoose");

const busquedaSchema = mongoose.Schema({
  code: Number,
  pais: String,
  departamento: String,
  ciudad: String,
  carrera: String,
  // imagen: String,
});

module.exports = mongoose.model("Busqueda", busquedaSchema);