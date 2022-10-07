
const { MigrationInterface, QueryRunner, Table ,TableIndex,createIndex} = require("typeorm");

module.exports = class department1664771736385 {

    async up(queryRunner) {
        await queryRunner.createTable(
            new Table({
                name: "department",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar"
                    }
                ]
            }),true,
        )
    }

    async down(queryRunner) {
        await queryRunner.dropTable("department");
    }

}
