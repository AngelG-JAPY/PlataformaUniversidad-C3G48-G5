const noticiaModel = require("../models/noticias");

module.exports = class noticiasController {
  static async getAll(req, res) {
    try {
      const noticias = await noticiaModel.find();
      res.status(200).json(noticias);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async getByCode(req, res) {
    const code = req.params.code; //la peticion va a tener unos parametros
    try {
      const noticia = await noticiaModel.findOne({ code: code });
      if (noticia != null) {
        res.status(200).json(noticia);
      } else {
        res.status(404).json();
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async insert(req, res) {
    try {
      const noticia = req.body;
      const newNoticia = await noticiaModel.create(noticia);
      res.status(201).json(newNoticia);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
