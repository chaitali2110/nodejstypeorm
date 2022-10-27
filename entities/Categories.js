const typeorm = require("typeorm");

var Categories = new typeorm.EntitySchema({
    name: "Categories",
    columns: {
        id: {
            primary: true,
            type: Number,
            generated: true,
        },
        parentId: {
            type: Number
        },
        catname: {
            type: String
        },
    },
    relations: {
        categoryinfo: {
            target: 'Categories',
            type: "one-to-many",
            cascade: true,  
        },
    },

    // relations: {
    //     categoryinfo: {
    //       type: 'many-to-one',
    //       target: 'Categories',
    //       joinColumn: {
    //         name: 'parentId',
    //       },
    //     }
    // },
});

module.exports = Categories;