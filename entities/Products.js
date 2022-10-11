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
        }
    }, 
    relations: {
        categoryinfo: {
          type: 'many-to-one',
          target: 'Categories',
          joinColumn: {
            name: 'categoryId',
          },
        }
      },
});

module.exports = Products;