const express = require("express");
const ProductsController = require("../controllers/productsController");
const NoticiasController = require("../controllers/noticiasController");
const UsersController = require("../controllers/usersController");
const BusquedasController = require("../controllers/busquedasController");
const ContactoController = require("../controllers/contactoController");
const mailController = require("../controllers/mailController");


// Carga de archivos
const multer = require("multer");
const storageConfig = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

const upload = multer({ storage: storageConfig });
 

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
<<<<<<< HEAD
router.post("/busquedas", upload.single("image"), BusquedasController.insert);
=======
router.post("/busquedas", BusquedasController.insert);

//ruta contacto
router.post("/contacto", ContactoController.insert);
router.get("/mostrarsms", ContactoController.getAll);
>>>>>>> 2962c0725c176fe591258f1f965746fb4c5fa4d6
module.exports = router;
