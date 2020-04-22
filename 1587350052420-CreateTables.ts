import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1587350052420 implements MigrationInterface {
    name = 'CreateTables1587350052420'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "id_city" integer NOT NULL, "district" character varying(100) NOT NULL, "street" character varying(100) NOT NULL, "number" integer NOT NULL, "cep" character varying(8) NOT NULL, "obs" character varying(255), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "category_product" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "obs" character varying(255), CONSTRAINT "PK_f132cc7be455c359ba84d1e7246" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(255) NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "type_of_database" ("id" SERIAL NOT NULL, "type" character varying(30) NOT NULL, "plugin" character varying(30) NOT NULL, CONSTRAINT "PK_1bd6715d8d02d82e331fb751879" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "market" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "logo" character varying(255) NOT NULL, "cnpj" character varying(14) NOT NULL, "email" character varying(70) NOT NULL, "password" character varying(255) NOT NULL, "connectionStringDatabase" character varying(255) NOT NULL, "userDatabase" character varying(20) NOT NULL, "passwordDatabase" character varying(20) NOT NULL, "km_delivery" character varying(100) NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "typeOfDatabaseId" integer, CONSTRAINT "UQ_1aeb3f3714d39ebc4697c220e97" UNIQUE ("name"), CONSTRAINT "UQ_b16d758e54a7e9834e748325add" UNIQUE ("cnpj"), CONSTRAINT "UQ_df94b6d8a6b17068b8d436aa44e" UNIQUE ("email"), CONSTRAINT "PK_1e9a2963edfd331d92018e3abac" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "mean_of_payment" ("id" SERIAL NOT NULL, "type" character varying(30) NOT NULL, CONSTRAINT "PK_bd91f824d9c9b43518680ba7fa3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "product_market" ("product_id" integer NOT NULL, "market_id" integer NOT NULL, CONSTRAINT "PK_ac4c5d41feaabcdd76ba362c852" PRIMARY KEY ("product_id", "market_id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD CONSTRAINT "FK_be7be479ee94f713c56895de2d2" FOREIGN KEY ("typeOfDatabaseId") REFERENCES "type_of_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "market" DROP CONSTRAINT "FK_be7be479ee94f713c56895de2d2"`, undefined);
        await queryRunner.query(`DROP TABLE "product_market"`, undefined);
        await queryRunner.query(`DROP TABLE "mean_of_payment"`, undefined);
        await queryRunner.query(`DROP TABLE "market"`, undefined);
        await queryRunner.query(`DROP TABLE "type_of_database"`, undefined);
        await queryRunner.query(`DROP TABLE "customer"`, undefined);
        await queryRunner.query(`DROP TABLE "category_product"`, undefined);
        await queryRunner.query(`DROP TABLE "address"`, undefined);
    }

}
