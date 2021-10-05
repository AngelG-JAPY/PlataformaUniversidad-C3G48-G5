const express = require("express");
const ProductsController = require("../controllers/productsController");
const UsersController = require("../controllers/usersController");

const router = express.Router();

// rutas de producto
router.get("/products", ProductsController.getAll);
router.get("/products/:code", ProductsController.getByCode);
router.post("/products", ProductsController.insert);
router.put("/products/:code", ProductsController.update);
router.delete("/products/:code", ProductsController.delete);


router.post("/users", UsersController.insert);
router.post("/authenticate", UsersController.validateUser);

module.exports = router;
