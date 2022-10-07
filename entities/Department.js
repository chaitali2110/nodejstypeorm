const typeorm = require("typeorm");

var Department = new typeorm.EntitySchema({
    name: "Department",
    columns: {
        id:{
            primary: true,
            type: Number,
            generated: true,
        },
        name:{
            type: String,
        },
    },

    relations: {
        departmentinfo: {
            target: 'Employee',
            type: "one-to-many",
            // inverseSide: "Employee",
            cascade: true,  
        },
    },
});

module.exports = Department;