const { MigrationInterface, QueryRunner, Table, TableForeignKey } = require("typeorm");

module.exports = class products1665470797639 {

    async up(queryRunner) {
        await queryRunner.createTable(
            new Table({
                name: "products",
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
                        type: "varchar",
                    },
                    {
                        name: "price",
                        type: "int",
                    },
                    {
                        name: "categoryId",
                        type: "int",
                    }
                ]
            }),true,
        )

        await queryRunner.createForeignKey(
            "products",
            new TableForeignKey({
                columnNames: ["categoryId"],
                referencedColumnNames: ["id"],
                referencedTableName: "categories",
            })
        )
    }

    async down(queryRunner) {
        const table = await queryRunner.getTable("products");
        table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("categoryId") !== -1,
        )
        await queryRunner.dropForeignKey("products","categoryId");
        await queryRunner.dropTable("products");
    }

}
