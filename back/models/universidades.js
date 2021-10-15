const mongoose = require("mongoose");

const universidadSchema = mongoose.Schema({
  code: Number,
  pais: String,
  ciudad: String,
  departamento: String,
  carrera: String,
  url: String,
});

module.exports = mongoose.model("Universidad", universidadSchema);
/*
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  code: Number,
  name: String,
  price: Number,
  categories: Array,
});

module.exports = mongoose.model("Product", productSchema);
*/

