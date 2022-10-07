const express = require('express');
const router = express.Router();

const usercontroller = require("./../controllers/user.controller");
const departmentController = require("./../controllers/department.controller");
const employeeController = require("./../controllers/employee.controller");
const { userValidationRules,loginValidation,validate } = require("./../middleware/validation");
const verifyUser  = require("./../middleware/verifytoken");




router.get("/",usercontroller.allData);
router.get("/users/:id",usercontroller.DataById);
router.post("/users",[userValidationRules(),validate],usercontroller.Create);
router.delete("/users/:id",usercontroller.Delete);
router.put("/users/:id",[userValidationRules(),validate],usercontroller.update);

router.post("/users/login",[loginValidation(),validate],usercontroller.login);

router.get("/users",verifyUser,usercontroller.userDataa);

router.get("/dept",departmentController.allData);
router.post("/dept",departmentController.Create);
router.post("/employee",employeeController.Create);
router.get("/employee",employeeController.allData);

module.exports = router;