import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1587525994850 implements MigrationInterface {
    name = 'CreateTables1587525994850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "FK_2bbc7de4507b03dba020b3b76b1"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "PK_2eb5ce4324613b4b457c364f4a2"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD "brand" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "PK_3d936b1865f848bc4beb1c8165e" PRIMARY KEY ("brand")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD "product" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "PK_3d936b1865f848bc4beb1c8165e"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "PK_ec42cce2cfd913fc25afe816855" PRIMARY KEY ("brand", "product")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "productBrand" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_578f63f0b7a38ba8632fa18aed7"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_12d512808f7f9098173798272f6" PRIMARY KEY ("codProductInMarket", "productBrand")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "market" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_12d512808f7f9098173798272f6"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_45233a6e23dffad8a70c2040814" PRIMARY KEY ("codProductInMarket", "productBrand", "market")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "brandId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "FK_a54e53d508377531a73c0396824" FOREIGN KEY ("brandId", "productId") REFERENCES "product_brand"("brand","product") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "FK_a54e53d508377531a73c0396824"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "brandId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_45233a6e23dffad8a70c2040814"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_12d512808f7f9098173798272f6" PRIMARY KEY ("codProductInMarket", "productBrand")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "market"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_12d512808f7f9098173798272f6"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_578f63f0b7a38ba8632fa18aed7" PRIMARY KEY ("codProductInMarket")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "productBrand"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "PK_ec42cce2cfd913fc25afe816855"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "PK_3d936b1865f848bc4beb1c8165e" PRIMARY KEY ("brand")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP COLUMN "product"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "PK_3d936b1865f848bc4beb1c8165e"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP COLUMN "brand"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD "id" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "PK_2eb5ce4324613b4b457c364f4a2" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "FK_2bbc7de4507b03dba020b3b76b1" FOREIGN KEY ("productId") REFERENCES "product_brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
