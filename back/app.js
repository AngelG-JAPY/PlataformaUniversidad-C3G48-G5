require("dotenv").config();

//CONFIGURACION DEL SERVIDOR WEB
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//agrgar las rutas a escuchar
app.use("/api", require("./routes/routes"));

// configurar la conexion base de datos
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("conectado a la base de datos"))
  .catch((err) => console.error(err));

// Iniciar el servidor
const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Servidor corriendo en http://localhost:${port}`)
);
