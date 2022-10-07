var connection = require("typeorm")
var users = require("../entities/User");
var depts = require("../entities/Department");
var emps = require("./../entities/Employee");
// var student = require("./migrations/1664011904121-student");
var department = require("./migrations/1664771736385-department");
var employee = require("./migrations/1664784437027-employee");

var datasource = new connection.DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "dborm",
    port:3306,
    entities: [users,depts,emps],
    // migrations: [student,department,employee],
    migrations: [department,employee],
})

datasource.initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization", err);
});

exports.datasource = datasource;
// exports.module = datasource;

