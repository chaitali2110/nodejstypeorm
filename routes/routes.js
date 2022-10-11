const express = require("express");
const router = express.Router();

const userController = require("./../controllers/users.controllers");
const categoryController = require("./../controllers/categories.controllers");
const productController = require("./../controllers/products.controllers");
const { userValidationRules,loginValidation,validate, categoryValidation, productValidation } = require("./../middleware/validation");
const verifyUser = require("./../middleware/verifytoken");

router.post("/users",[userValidationRules(),validate],userController.register);
router.post("/users/login",[loginValidation(),validate],userController.login);
router.get("/users",verifyUser,userController.userDataa);

router.post("/categories",[categoryValidation(),validate],categoryController.create);
router.get("/categories",categoryController.getAll);

router.post("/products",[productValidation(),validate],productController.create);
router.get("/products",productController.getAll);
router.put("/products/:id",productController.update);
router.delete("/products/:id",productController.delete);


module.exports = router;