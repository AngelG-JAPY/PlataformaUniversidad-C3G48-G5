const productModel = require("../models/products");

module.exports = class ProductsController {
  static async getAll(req, res) {
    try {
      const products = await productModel.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  static async getByCode(req, res) {
    const code = req.params.code; //la peticion va a tener unos parametros
    try {
      const product = await productModel.findOne({ code: code });
      if (product != null) {
        res.status(200).json(product);
      } else {
        res.status(404).json();
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async insert(req, res) {
    try {
      const product = req.body;
      const newProduct = await productModel.create(product);
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async update(req, res) {
    try {
      const code = req.params.code;
      const product = req.body;
      const newProduct = await productModel.updateOne({ code: code }, product);
      res.status(200).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const code = req.params.code;
      await productModel.deleteOne({ code: code });
      res.status(200).json();
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};
