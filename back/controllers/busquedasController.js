const busquedaModel = require("../models/busquedas");
const products = require("../models/products");

module.exports = class busquedasController {
  static async getAll(req, res) {
    try {
      const busquedas = await busquedaModel.find();
      res.status(200).json(busquedas);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async getByCode(req, res) {
    const code = req.params.code; //la peticion va a tener unos parametros
    try {
      const busqueda = await busquedaModel.findOne({ code: code });
      if (busqueda != null) {
        res.status(200).json(busqueda);
      } else {
        res.status(404).json();
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async insert(req, res) {
    try {
        const busqueda = req.body;
        if (req.file != undefined) {
          const imageName = req.file.filename;
          busqueda.imageUrl = "/" + imageName;
        }
        const newBusqueda = await busquedaModel.create(busqueda);
        res.status(201).json(newBusqueda);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
