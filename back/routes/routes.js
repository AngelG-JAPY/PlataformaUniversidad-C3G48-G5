const express = require("express");
const ProductsController = require("../controllers/productsController");
const NoticiasController = require("../controllers/noticiasController");
const UsersController = require("../controllers/usersController");
const mailController = require("../controllers/mailController");

const router = express.Router();

// rutas de producto
router.get("/products", ProductsController.getAll);
router.get("/products/:code", ProductsController.getByCode);
router.post("/products", ProductsController.insert);
router.put("/products/:code", ProductsController.update);
router.delete("/products/:code", ProductsController.delete);

// rutas de noticias
router.get("/noticias", NoticiasController.getAll);
router.post("/noticias", NoticiasController.insert);

//ruta user
router.post("/users", UsersController.insert);
router.post("/authenticate", UsersController.validateUser);
// ruta mail
router.post("/send-mail", mailController.sendEmail);

module.exports = router;
