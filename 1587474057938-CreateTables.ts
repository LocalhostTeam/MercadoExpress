import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1587474057938 implements MigrationInterface {
    name = 'CreateTables1587474057938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brand" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "fullName" character varying(255) NOT NULL, "shortName" character varying(50) NOT NULL, "categoryProductId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "product_brand" ("id" integer NOT NULL, "image" character varying(255) NOT NULL, "productId" integer, "brandId" integer, CONSTRAINT "PK_2eb5ce4324613b4b457c364f4a2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_ac4c5d41feaabcdd76ba362c852"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_021da3cc92daa5af39cbd3c4c7b" PRIMARY KEY ("market_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "product_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_021da3cc92daa5af39cbd3c4c7b"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "market_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "username" character varying(100) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "profileImage" character varying(255)`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "phone" character varying(11)`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "alternativeContact" character varying(11)`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "dateBirth" date NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD "phone" character varying(11) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD "openingTime" TIME WITH TIME ZONE NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD "closingTime" TIME WITH TIME ZONE NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD "bank" character varying(20) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD "codBank" character varying(4) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD "agency" character varying(5) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD "account" character varying(11) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "market" ADD "verifyingDigit" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "codProductInMarket" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_578f63f0b7a38ba8632fa18aed7" PRIMARY KEY ("codProductInMarket")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "discount" real NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "productId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "marketId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "name"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "name" character varying(255) NOT NULL`, undefined);
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
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "name"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" ADD "name" character varying(100) NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "marketId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "discount"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_578f63f0b7a38ba8632fa18aed7"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "codProductInMarket"`, undefined);
        await queryRunner.query(`ALTER TABLE "market" DROP COLUMN "verifyingDigit"`, undefined);
        await queryRunner.query(`ALTER TABLE "market" DROP COLUMN "account"`, undefined);
        await queryRunner.query(`ALTER TABLE "market" DROP COLUMN "agency"`, undefined);
        await queryRunner.query(`ALTER TABLE "market" DROP COLUMN "codBank"`, undefined);
        await queryRunner.query(`ALTER TABLE "market" DROP COLUMN "bank"`, undefined);
        await queryRunner.query(`ALTER TABLE "market" DROP COLUMN "closingTime"`, undefined);
        await queryRunner.query(`ALTER TABLE "market" DROP COLUMN "openingTime"`, undefined);
        await queryRunner.query(`ALTER TABLE "market" DROP COLUMN "phone"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "dateBirth"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "alternativeContact"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "phone"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "profileImage"`, undefined);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "username"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "market_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_021da3cc92daa5af39cbd3c4c7b" PRIMARY KEY ("market_id")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "product_id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_021da3cc92daa5af39cbd3c4c7b"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_ac4c5d41feaabcdd76ba362c852" PRIMARY KEY ("product_id", "market_id")`, undefined);
        await queryRunner.query(`DROP TABLE "product_brand"`, undefined);
        await queryRunner.query(`DROP TABLE "product"`, undefined);
        await queryRunner.query(`DROP TABLE "brand"`, undefined);
    }

}
