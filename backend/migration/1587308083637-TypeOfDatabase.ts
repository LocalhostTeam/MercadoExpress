import {MigrationInterface, QueryRunner} from "typeorm";

export class TypeOfDatabase1587308083637 implements MigrationInterface {
    name = 'TypeOfDatabase1587308083637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "id_city" integer NOT NULL, "district" character varying(100) NOT NULL, "street" character varying(100) NOT NULL, "number" integer NOT NULL, "cep" character varying(8) NOT NULL, "obs" character varying(255), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "category_product" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "obs" character varying(255), "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f132cc7be455c359ba84d1e7246" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "market" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "logo" character varying(100) NOT NULL, "cnpj" character varying(14) NOT NULL, "database" character varying(255) NOT NULL, "typeDB" character varying(100) NOT NULL, "km_delivery" character varying(100) NOT NULL, CONSTRAINT "PK_1e9a2963edfd331d92018e3abac" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "mean_of_payment" ("id" SERIAL NOT NULL, "type" character varying(30) NOT NULL, CONSTRAINT "PK_bd91f824d9c9b43518680ba7fa3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "product_market" ("product_id" integer NOT NULL, "market_id" integer NOT NULL, CONSTRAINT "PK_ac4c5d41feaabcdd76ba362c852" PRIMARY KEY ("product_id", "market_id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "type_of_database" ("id" SERIAL NOT NULL, "type" character varying(30) NOT NULL, "plugin" character varying(30) NOT NULL, CONSTRAINT "PK_1bd6715d8d02d82e331fb751879" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "type_of_database"`, undefined);
        await queryRunner.query(`DROP TABLE "product_market"`, undefined);
        await queryRunner.query(`DROP TABLE "mean_of_payment"`, undefined);
        await queryRunner.query(`DROP TABLE "market"`, undefined);
        await queryRunner.query(`DROP TABLE "category_product"`, undefined);
        await queryRunner.query(`DROP TABLE "address"`, undefined);
    }

}
