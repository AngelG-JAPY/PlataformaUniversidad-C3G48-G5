const contactoModel = require("../models/contactos");

module.exports = class contactosController {
  static async getAll(req, res) {
    try {
      const contactos = await contactoModel.find();
      res.status(200).json(contactos);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async insert(req, res) {
    try {
      const contacto = req.body;
      const newcontacto = await contactoModel.create(contacto);
      res.status(201).json(newcontacto);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const code = req.params.code;
      await contactoModel.deleteOne({ code: code });
      res.status(200).json();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
