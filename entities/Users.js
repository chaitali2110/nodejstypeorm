const typeorm  = require("typeorm");

var Users = new typeorm.EntitySchema({
    name: "Users",
    columns: {
        id: {
            primary: true,
            type: Number,
            generated: true,
        },
        name: {
            type: String
        },
        username: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        token: {
            type: String,
        },
    },
});

module.exports = Users;