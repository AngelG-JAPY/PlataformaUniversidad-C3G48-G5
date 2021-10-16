module.exports = class mailController {
  static sendEmail(req, res) {
    try {
      const mensaje = req.body;
      console.log("enviar mensaje: ", mensaje);
      if (mensaje.msg == undefined || mensaje.msg === "") {
        res.status(400).json({ mensaje: "No envie mensajes vacios " });
      } else {
        var nodemailer = require("nodemailer");

        var transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          post: 587,
          secure: false,
          auth: {
            user: "universidadg48g5@gmail.com",
            pass: "kuobcsoodfhzckel",
          },
        });
        var mailOptions = {
          from: "universidad",
          to: "universidadg48g5@gmail.com",
          subject: "Pregunta Nueva",
          text: mensaje.msg,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            res.status(500).sen(error.message);
          } else {
            console.log("Email enviado.");
            res.status(200).jsonp(req.body);
          }
        });

        res.status(200).json();
      }
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
//conexion a correo electroinco universidadg48g5@gmail.com
