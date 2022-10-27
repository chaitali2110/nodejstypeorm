const typeorm = require("typeorm");

var Products = new typeorm.EntitySchema({
    name: "Products",
    columns:{
        id:{
            primary: true,
            type: Number,
            generated: true,
        },
        name:{
            type: String,
        },
        price: {
            type: Number,
        },
        categoryId:{
            type: Number,
        },
        image:{
            type: String,
        }
    }, 
    // relations: {
    //     categoryinfo: {
    //         target: 'Products',
    //         type: "one-to-one",
    //         joinTable: true,
    //         joinColumn:{
    //             name: categoryId,
    //         },
    //         cascade: true,
    //     },
    // },
    relations: {
        categoryinfo: {
          type: 'many-to-one',
          target: 'Products',
          joinColumn: {
            name: 'categoryId',
          },
        }
      },
});

module.exports = Products;

