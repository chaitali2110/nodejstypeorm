
const typeorm = require("typeorm");

var User = new typeorm.EntitySchema({
    name: "User", 
    columns: {
        id: {
            primary: true,
            type: Number,
            generated: true,
        },
        name: {
            type: String,
        },
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        verify_token: {
            type: String,
        }

    },
});

module.exports = User;


