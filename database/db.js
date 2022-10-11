const typeorm = require("typeorm");
const userTable = require("./migrations/1665400412843-users");
const categoryTable = require("./migrations//1665459976492-category");
const productTable = require("./migrations/1665470797639-products");
const userEntity = require("./../entities/Users");
const categoryEntity = require("./../entities/Categories");
const productEntity = require("./../entities/Products");

var dataSource = new typeorm.DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "nodejs_crud_demo",
    port: 3306,
    entities: [userEntity,categoryEntity,productEntity],
    migrations: [userTable,categoryTable,productTable],
});

dataSource.initialize()
    .then(function(){
        console.log("DataSource has been intialized");
})
    .catch(function (err) {
        console.error("Error during Data Source initialization", err);
});

exports.dataSource = dataSource;