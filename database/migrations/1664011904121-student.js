
// const { MigrationInterface, QueryRunner ,Table} = require("typeorm");
// const { createRandomUser } = require("../seeders/20220927043157-add-users");

// module.exports = class student1664011904121 {

//     async up(queryRunner) {
//         await queryRunner.createTable(
//             new Table({
//                 name: "student",
//                 columns:[
//                     {
//                         name: "id",
//                         type : "int",
//                         isPrimary: true,
//                     },
//                     {
//                         name: "name",
//                         type: "varchar",
//                     },
//                     {
//                         name: "email",
//                         type: "varchar",
//                     }
//                 ]
//             }),true
//         )

//         var data=createRandomUser();

//         console.log(data);
//         await queryRunner.query(`insert into student (name,email) values("${data.name}","${data.email}")`);
//     }

//     async down(queryRunner) {
//         await queryRunner.dropTable("student");
//     }

// }
