import { type MigrationInterface, type QueryRunner } from 'typeorm'

export class Script1686404485838 implements MigrationInterface {
  name = 'Script1686404485838'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "entry_type" ("id" SERIAL NOT NULL, "name" character varying(200) NOT NULL, CONSTRAINT "PK_3d3cae4ff3588e8297deca0f78b" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "entry" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "typeId" integer NOT NULL, CONSTRAINT "PK_a58c675c4c129a8e0f63d3676d6" PRIMARY KEY ("id"))')
    await queryRunner.query('ALTER TABLE "entry" ADD CONSTRAINT "FK_36e818d2a39a4be542b50be6e77" FOREIGN KEY ("typeId") REFERENCES "entry_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')

    // INSERTS
    await queryRunner.query('INSERT INTO public.entry_type ("name") VALUES(\'debit\')')
    await queryRunner.query('INSERT INTO public.entry_type ("name") VALUES(\'credit\')')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "entry" DROP CONSTRAINT "FK_36e818d2a39a4be542b50be6e77"')
    await queryRunner.query('DROP TABLE "entry"')
    await queryRunner.query('DROP TABLE "entry_type"')
  }
}
