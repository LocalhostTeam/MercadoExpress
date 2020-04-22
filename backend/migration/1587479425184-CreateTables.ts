import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1587479425184 implements MigrationInterface {
    name = 'CreateTables1587479425184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "id_city" integer NOT NULL, "district" character varying(100) NOT NULL, "street" character varying(100) NOT NULL, "number" integer NOT NULL, "cep" character varying(8) NOT NULL, "obs" character varying(255), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "brand" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "category_product" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "obs" character varying(255), CONSTRAINT "PK_f132cc7be455c359ba84d1e7246" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "username" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "password" character varying(255) NOT NULL, "profileImage" character varying(255), "phone" character varying(11), "alternativeContact" character varying(11), "dateBirth" date NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "type_of_database" ("id" SERIAL NOT NULL, "type" character varying(30) NOT NULL, "plugin" character varying(30) NOT NULL, CONSTRAINT "PK_1bd6715d8d02d82e331fb751879" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "market" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "logo" character varying(255) NOT NULL, "cnpj" character varying(14) NOT NULL, "email" character varying(70) NOT NULL, "password" character varying(255) NOT NULL, "phone" character varying(11) NOT NULL, "openingTime" TIME WITH TIME ZONE NOT NULL, "closingTime" TIME WITH TIME ZONE NOT NULL, "bank" character varying(20) NOT NULL, "codBank" character varying(4) NOT NULL, "agency" character varying(5) NOT NULL, "account" character varying(11) NOT NULL, "verifyingDigit" integer NOT NULL, "connectionStringDatabase" character varying(255) NOT NULL, "userDatabase" character varying(20) NOT NULL, "passwordDatabase" character varying(20) NOT NULL, "km_delivery" character varying(100) NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), "typeOfDatabaseId" integer, CONSTRAINT "UQ_1aeb3f3714d39ebc4697c220e97" UNIQUE ("name"), CONSTRAINT "UQ_b16d758e54a7e9834e748325add" UNIQUE ("cnpj"), CONSTRAINT "UQ_df94b6d8a6b17068b8d436aa44e" UNIQUE ("email"), CONSTRAINT "PK_1e9a2963edfd331d92018e3abac" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "mean_of_payment" ("id" SERIAL NOT NULL, "type" character varying(30) NOT NULL, CONSTRAINT "PK_bd91f824d9c9b43518680ba7fa3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "fullName" character varying(255) NOT NULL, "shortName" character varying(50) NOT NULL, "categoryProductId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "product_brand" ("id" integer NOT NULL, "image" character varying(255) NOT NULL, "productId" integer, "brandId" integer, CONSTRAINT "PK_2eb5ce4324613b4b457c364f4a2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "product_market" ("codProductInMarket" integer NOT NULL, "discount" real NOT NULL, "productId" integer, "marketId" integer, CONSTRAINT "PK_578f63f0b7a38ba8632fa18aed7" PRIMARY KEY ("codProductInMarket"))`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD CONSTRAINT "FK_be7be479ee94f713c56895de2d2" FOREIGN KEY ("typeOfDatabaseId") REFERENCES "type_of_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_9f2dbec3d3210934d0c6d41c130" FOREIGN KEY ("categoryProductId") REFERENCES "category_product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "FK_bb99997d85c080bbde113875ef8" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "FK_ad86ddf61021f22143a805b62a2" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "FK_2bbc7de4507b03dba020b3b76b1" FOREIGN KEY ("productId") REFERENCES "product_brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "FK_af1f58a92b8ec3f7cdf6092fad3" FOREIGN KEY ("marketId") REFERENCES "market"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "FK_af1f58a92b8ec3f7cdf6092fad3"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "FK_2bbc7de4507b03dba020b3b76b1"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "FK_ad86ddf61021f22143a805b62a2"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "FK_bb99997d85c080bbde113875ef8"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_9f2dbec3d3210934d0c6d41c130"`, undefined);
        await queryRunner.query(`ALTER TABLE "market" DROP CONSTRAINT "FK_be7be479ee94f713c56895de2d2"`, undefined);
        await queryRunner.query(`DROP TABLE "product_market"`, undefined);
        await queryRunner.query(`DROP TABLE "product_brand"`, undefined);
        await queryRunner.query(`DROP TABLE "product"`, undefined);
        await queryRunner.query(`DROP TABLE "mean_of_payment"`, undefined);
        await queryRunner.query(`DROP TABLE "market"`, undefined);
        await queryRunner.query(`DROP TABLE "type_of_database"`, undefined);
        await queryRunner.query(`DROP TABLE "customer"`, undefined);
        await queryRunner.query(`DROP TABLE "category_product"`, undefined);
        await queryRunner.query(`DROP TABLE "brand"`, undefined);
        await queryRunner.query(`DROP TABLE "address"`, undefined);
    }

}
