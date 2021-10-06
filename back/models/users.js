const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "nombre": String,
    "apellido": String,
    "correo": String,
    "contraseña": String,
    "role": String
    
});

module.exports = mongoose.model("User", userSchema);