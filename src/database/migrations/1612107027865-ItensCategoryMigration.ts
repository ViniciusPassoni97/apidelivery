import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ItensCategoryMigration1612107027865 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name:'itens',
            columns:[
                {
                    name:'id',
                    type:'integer',
                    unsigned:true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:'increment',
                },
                {
                    name:'description',
                    type:'varchar',
                },
                {
                    name:'image',
                    type:'varchar',
                },
                {
                    name:'value',
                    type:'decimal',
                },
                {
                    name:'category_id',
                    type:'integer'
                }
            ],
            foreignKeys:[
                {
                    name:'ItensCategories',
                    columnNames:['category_id'],
                    referencedTableName:'categories',
                    referencedColumnNames:['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("itens");
    }

}
