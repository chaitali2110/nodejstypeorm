const typeorm = require("typeorm");
const Department = require("./Department");

const Employee = new typeorm.EntitySchema({
    name: "Employee",
    columns:{
        id:{
            primary: true,
            type: Number,
            generated: true,
        },
        name:{
            type: String,
        },
        email: {
            type: String,
        },
        departmentId:{
            type: Number,
        }
    },  
    // relations: {
    //     Department: {
    //         target: 'Department',
    //         type: "one-to-one",
    //         joinTable: true,
    //         joinColumn:{
    //             department: Department,
    //         },
    //         cascade: true,
    //     },
    // },
    relations: {
        departmentinfo: {
          type: 'many-to-one',
          target: 'Department',
          joinColumn: {
            name: 'departmentId',
          },
        //   inverseSide: 'Department'
        }
      },
});


module.exports = Employee;