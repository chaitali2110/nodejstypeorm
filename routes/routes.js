const express = require('express');
const router = express.Router();

const usercontroller = require("./../controllers/user.controller");
const categoryController = require("./../controllers/categories.controller");
const productController = require("./../controllers/products.controller");
const { userValidationRules,loginValidation,validate } = require("./../middleware/validation");
const verifyUser  = require("./../middleware/verifytoken");

var multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/assets/images');
    },
    filename: (req, file, cb) => {
        let fileExtension = Date.now()+'.'+file.mimetype.split('/').reverse()[0];
        cb(null, fileExtension)
    }
  });

var upload = multer({storage: storage}); 




router.get("/",usercontroller.allData);
router.get("/users/:id",usercontroller.DataById);
router.post("/users",[userValidationRules(),validate],usercontroller.Create);
router.delete("/users/:id",usercontroller.Delete);
router.put("/users/:id",[userValidationRules(),validate],usercontroller.update);

router.post("/users/login",[loginValidation(),validate],usercontroller.login);

router.get("/users",verifyUser,usercontroller.userDataa);


router.post("/category",categoryController.create);
router.get("/category",categoryController.getAll);

router.get("/categorywiseproduct/:id",productController.getCatWiseProduct);

router.post("/product",upload.single('image'),productController.create);
router.get("/product",productController.getAll);
router.put("/product/:id",upload.single('image'),productController.update);
// router.put("/product/:id",productController.update);
router.delete("/product/:id",productController.delete);

module.exports = router;