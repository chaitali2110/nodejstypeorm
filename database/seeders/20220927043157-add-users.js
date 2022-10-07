// const faker = require("faker");

const { faker }  = require("@faker-js/faker")

// 'use strict';

// module.exports = {
//   async up  (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */

//     var dummyData = [];
//     for(var i=0;i<10;i++)
//     {
//       dummyData.push({
//         name: faker.name.name(),
//         username: faker.username.username(),
//         email: faker.internet.email(),
//         password: faker.password.password(),

//       });
//     }
//     await queryInterface.bulkInsert("user",dummyData,{})
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */

//      await queryInterface.bulkDelete('user', null, {});
//   }
// };


// const faker = require('faker');
// const users = [...Array(100)].map((user) => (
//   {
//     name: faker.name.name(),
//     username: faker.name.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(8),
//   }
// ))
// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('user', users, {});
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('user', null, {});
//   }
// };


exports.createRandomUser = () => {
  return{
    "name": faker.name.firstName(),
    "email": faker.internet.email()
  }
}