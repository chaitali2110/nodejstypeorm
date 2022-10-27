var connection = require("typeorm")
var users = require("../entities/User");
var cats = require("../entities/Categories");
var pros = require("../entities/Products");
// var student = require("./migrations/1664011904121-student");
var categoryTable = require("./migrations/1666843339158-categories");
var productTable = require("./migrations/1666843406469-products");

var datasource = new connection.DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "dborm",
    port:3306,
    entities: [users,cats,pros],
    // migrations: [student,category,product],
    migrations: [categoryTable,productTable],
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

