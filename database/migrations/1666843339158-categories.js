const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class categories1666843339158 {

    async up(queryRunner) {
        await queryRunner.createTable(
            new Table({
                name: "categories",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "parentId",
                        type: "int",
                    },
                    {
                        name: "catname",
                        type: "varchar"
                    }
                ]
            }),
            true,
        )
    }

    async down(queryRunner) {
        await queryRunner.dropTable("categories");
    }

}
