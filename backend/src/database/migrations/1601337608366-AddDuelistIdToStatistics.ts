import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export default class AddDuelistIdToStatistics1601337608366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('statistics', new TableColumn({
      name: 'duelist_id',
      type: 'uuid',
    }));

    await queryRunner.createForeignKey('statistics', new TableForeignKey({
      name: 'StatisticDuelist',
      columnNames: ['duelist_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('statistics', 'StatisticDuelist');

    await queryRunner.dropColumn('statistics', 'duelist_id');
  }

}
