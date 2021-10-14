const express = require("express");
const ProductsController = require("../controllers/productsController");
const NoticiasController = require("../controllers/noticiasController");
const UsersController = require("../controllers/usersController");
<<<<<<< HEAD
const BusquedasController = require("../controllers/busquedasController");
const ContactoController = require("../controllers/contactoController");
=======
const mailController = require("../controllers/mailController");
>>>>>>> b1927d3dd0ad3c3266ac15079638f1f3f69ffede

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

//rutas busqueda
router.get("/busquedas", BusquedasController.getAll);
router.post("/busquedas", BusquedasController.insert);

//ruta contacto
router.post("/contacto", ContactoController.insert);
router.get("/mostrarsms", ContactoController.getAll);
module.exports = router;
