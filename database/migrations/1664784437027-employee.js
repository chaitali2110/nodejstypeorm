
const { MigrationInterface, QueryRunner,createForeignKey,Table,TableForeignKey } = require("typeorm");

module.exports = class employee1664784437027 {

    async up(queryRunner) {
        await queryRunner.createTable(
            new Table({
                name: "employee",
                columns:[
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
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "departmentId",
                        type: "int",
                    }
                ]
            }),true,  
        )
       

        await queryRunner.createForeignKey(
            "employee",
            new TableForeignKey({
                columnNames: ["departmentId"],
                referencedColumnNames: ["id"],
                referencedTableName: "department",
            })
        )
    }

    async down(queryRunner) {
        const table = await queryRunner.getTable("employee")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("departmentId") !== -1,
        )
        await queryRunner.dropForeignKey("employee","departmentId");
        await queryRunner.dropTable("employee");
    }

}
