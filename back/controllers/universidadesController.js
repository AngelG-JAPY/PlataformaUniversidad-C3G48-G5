const universidadModel = require("../models/universidades");

module.exports = class UniversidadesController {
  static async getAll(req, res) {
    try {
      const universidades = await universidadModel.find();
      res.status(200).json(universidades);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async insert(req, res) {
    try {
      const universidad = req.body;
      const newUni = await universidadModel.create(universidad);
      res.status(201).json(newUni);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};






/*const productModel = require("../models/products");


module.exports = class ProductsController {
 static async getAll(req, res) {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}*/
