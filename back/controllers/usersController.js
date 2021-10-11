const userModel = require("../models/users");

module.exports = class UsersController {
  static async insert(req, res) {
    try {
      let user = req.body;
      user = await userModel.create(user);
      user.contraseña = undefined;
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async validateUser(req, res) {
    try {
      const credential = req.body;
      const user = await userModel.findOne({ correo: credential.correo });
      if (user == undefined || user == null) {
        res.status(404).json({ message: "Usuario no existe" });
      } else if (user.contraseña != credential.contraseña) {
        res.status(403).json({ message: "Usuario / contraseña no valido" });
      } else {
        user.contraseña = undefined;
        res.status(200).json(user);
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
