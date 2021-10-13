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
  console.log(`Servidor corriendo en direccion http://localhost:${port}`)
);
// conexion a correo electroinco universidadg48g5@gmail.com
var nodemailer = require("nodemailer")

app.post("/send-email" , (req,res) => {
      var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        post: 587,
        secure: false,
        auth: {
          user:"universidadg48g5@gmail.com",
          pass:"kuobcsoodfhzckel",

        }
      });
      var mailOptions = {
        from:"universidad",
        to:"universidadg48g5@gmail.com",
        subject:"Pregunta Nueva",
        text:"prueva var =",
      }
      transporter.sendMail(mailOptions, (error,info) => {
        if (error) {
          res.status(500).sen(error.message);          
        } else {
          console.log("Email enviado.");
          res.status(200).jsonp(req.body);
        }
      });
});

