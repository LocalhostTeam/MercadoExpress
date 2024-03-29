import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDB1590411905113 implements MigrationInterface {
    name = 'InitDB1590411905113'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "cityId" integer NOT NULL, "district" character varying(100) NOT NULL, "street" character varying(100) NOT NULL, "number" integer NOT NULL, "cep" character varying(8) NOT NULL, "lat" character varying(12), "log" character varying(12), "customerOwnerId" integer, "marketOwnerId" integer, "obs" character varying(255), "mainAddress" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "category_product" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "obs" character varying(255), CONSTRAINT "PK_f132cc7be455c359ba84d1e7246" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "fullName" character varying(255) NOT NULL, "shortName" character varying(50) NOT NULL, "categoryProductId" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "type_of_database" ("id" SERIAL NOT NULL, "type" character varying(30) NOT NULL, "plugin" character varying(30) NOT NULL, CONSTRAINT "PK_1bd6715d8d02d82e331fb751879" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "market" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "logo" character varying(255) NOT NULL, "cnpj" character varying(14) NOT NULL, "email" character varying(70) NOT NULL, "verifiedEmail" boolean NOT NULL DEFAULT false, "password" character varying(255) NOT NULL, "phone" character varying(11) NOT NULL, "verifiedPhone" boolean NOT NULL DEFAULT false, "bank" character varying(20) NOT NULL, "codBank" character varying(4) NOT NULL, "agency" character varying(5) NOT NULL, "account" character varying(11) NOT NULL, "verifyingDigit" integer NOT NULL, "connectionStringDatabase" character varying(255) NOT NULL, "userDatabase" character varying(20) NOT NULL, "passwordDatabase" character varying(20) NOT NULL, "maximumWithdrawTime" real NOT NULL DEFAULT 0, "maximumWithdraw" integer NOT NULL DEFAULT 0, "maximumDeliveryTime" TIME WITH TIME ZONE NOT NULL DEFAULT '00:00', "maximumDelivery" integer NOT NULL DEFAULT 0, "km_delivery" character varying(100) NOT NULL, "deliveryPricePerKm" real NOT NULL DEFAULT 0, "minimumDeliveryPrice" TIME WITH TIME ZONE NOT NULL DEFAULT '00:00', "maximumDeliveryPrice" real NOT NULL DEFAULT 0, "typeOfDatabaseId" integer NOT NULL, "brandId" integer NOT NULL, "productId" integer NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_1aeb3f3714d39ebc4697c220e97" UNIQUE ("name"), CONSTRAINT "UQ_b16d758e54a7e9834e748325add" UNIQUE ("cnpj"), CONSTRAINT "UQ_df94b6d8a6b17068b8d436aa44e" UNIQUE ("email"), CONSTRAINT "PK_1e9a2963edfd331d92018e3abac" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "product_brand" ("marketId" integer NOT NULL, "brandId" integer NOT NULL, "image" character varying(255) NOT NULL, "productId" integer NOT NULL, CONSTRAINT "PK_a9933f27cabb12fe23cf66ed163" PRIMARY KEY ("marketId", "brandId"))`, undefined);
        await queryRunner.query(`CREATE TABLE "brand" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "state" ("acronym" character varying(2) NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "UQ_b2c4aef5929860729007ac32f6f" UNIQUE ("name"), CONSTRAINT "PK_2366d70dba9147359c871415ac6" PRIMARY KEY ("acronym"))`, undefined);
        await queryRunner.query(`CREATE TABLE "city" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "stateAcronym" character varying(2), CONSTRAINT "UQ_f8c0858628830a35f19efdc0ecf" UNIQUE ("name"), CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "username" character varying(30), "profileImage" character varying(255), "email" character varying(70) NOT NULL, "verifiedEmail" boolean NOT NULL DEFAULT false, "password" character varying(255) NOT NULL, "phone" character varying(11) NOT NULL, "verifiedPhone" boolean NOT NULL DEFAULT false, "alternativeContact" character varying(11), "dateBirth" date NOT NULL, "notification" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb" UNIQUE ("email"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "mean_of_payment" ("id" SERIAL NOT NULL, "type" character varying(30) NOT NULL, CONSTRAINT "PK_bd91f824d9c9b43518680ba7fa3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "product_market" ("brandId" integer NOT NULL, "productId" integer NOT NULL, "marketId" integer NOT NULL, "codProductInMarket" integer NOT NULL, "discount" real NOT NULL, CONSTRAINT "PK_22034df563c938d523fe87fc0ba" PRIMARY KEY ("brandId", "productId", "marketId", "codProductInMarket"))`, undefined);
        await queryRunner.query(`CREATE TABLE "type_schedule" ("id" SERIAL NOT NULL, "name" character varying(30) NOT NULL, "obs" character varying(255), CONSTRAINT "PK_bb00e95d0730d0aebd51c4b06fa" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "schedule" ("id" SERIAL NOT NULL, "openingTime" TIME WITH TIME ZONE NOT NULL, "closingTime" TIME WITH TIME ZONE NOT NULL, "typeScheduleId" integer NOT NULL, CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_9f2dbec3d3210934d0c6d41c130" FOREIGN KEY ("categoryProductId") REFERENCES "category_product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD CONSTRAINT "FK_be7be479ee94f713c56895de2d2" FOREIGN KEY ("typeOfDatabaseId") REFERENCES "type_of_database"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "FK_ad86ddf61021f22143a805b62a2" FOREIGN KEY ("brandId") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "FK_bb99997d85c080bbde113875ef8" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "FK_ad86ddf61021f22143a805b62a3" UNIQUE ("brandId", "productId")`, undefined);
        await queryRunner.query(`ALTER TABLE "city" ADD CONSTRAINT "FK_777767ba9d9c108b17533dca1e6" FOREIGN KEY ("stateAcronym") REFERENCES "state"("acronym") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "FK_a54e53d508377531a73c0396824" FOREIGN KEY ("brandId", "productId") REFERENCES "product_brand"("brandId","productId") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "FK_af1f58a92b8ec3f7cdf6092fad3" FOREIGN KEY ("marketId") REFERENCES "market"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_aed63fe95e1c9ebf958db39d47c" FOREIGN KEY ("typeScheduleId") REFERENCES "type_schedule"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_aed63fe95e1c9ebf958db39d47c"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "FK_af1f58a92b8ec3f7cdf6092fad3"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "FK_a54e53d508377531a73c0396824"`, undefined);
        await queryRunner.query(`ALTER TABLE "city" DROP CONSTRAINT "FK_777767ba9d9c108b17533dca1e6"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "FK_bb99997d85c080bbde113875ef8"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "FK_ad86ddf61021f22143a805b62a2"`, undefined);
        await queryRunner.query(`ALTER TABLE "market" DROP CONSTRAINT "FK_be7be479ee94f713c56895de2d2"`, undefined);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_9f2dbec3d3210934d0c6d41c130"`, undefined);
        await queryRunner.query(`DROP TABLE "schedule"`, undefined);
        await queryRunner.query(`DROP TABLE "type_schedule"`, undefined);
        await queryRunner.query(`DROP TABLE "product_market"`, undefined);
        await queryRunner.query(`DROP TABLE "mean_of_payment"`, undefined);
        await queryRunner.query(`DROP TABLE "customer"`, undefined);
        await queryRunner.query(`DROP TABLE "city"`, undefined);
        await queryRunner.query(`DROP TABLE "state"`, undefined);
        await queryRunner.query(`DROP TABLE "brand"`, undefined);
        await queryRunner.query(`DROP TABLE "product_brand"`, undefined);
        await queryRunner.query(`DROP TABLE "market"`, undefined);
        await queryRunner.query(`DROP TABLE "type_of_database"`, undefined);
        await queryRunner.query(`DROP TABLE "product"`, undefined);
        await queryRunner.query(`DROP TABLE "category_product"`, undefined);
        await queryRunner.query(`DROP TABLE "address"`, undefined);
    }

}
