const mongoose = require("mongoose");

const busquedaSchema = mongoose.Schema({
    "code": Number,
    "nombre":String,
    "pais": String,
    "departamento": String,
    "ciudad": String,
    "carrera": String,
    "pagina": String,
    "imageUrl": String,
});

module.exports = mongoose.model("Busqueda", busquedaSchema);