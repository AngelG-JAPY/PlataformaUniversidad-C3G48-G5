const mongoose = require("mongoose");

const noticiaSchema = mongoose.Schema({
  code: Number,
  name: String,
  decripcion: String,
  Enlace: String,
  Etiqueta: Array,
});

module.exports = mongoose.model("Noticia", noticiaSchema);
