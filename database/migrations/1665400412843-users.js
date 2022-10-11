const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class users1665400412843 {

    async up(queryRunner) {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "username",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "token",  
                        type: "varchar",
                        default: null,
                    }
                ]
            }),
            true,
        )
    }

    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }

}
