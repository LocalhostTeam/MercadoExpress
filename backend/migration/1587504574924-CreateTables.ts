import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1587504574924 implements MigrationInterface {
    name = 'CreateTables1587504574924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "FK_2bbc7de4507b03dba020b3b76b1"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "productId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD "brand" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "PK_2eb5ce4324613b4b457c364f4a2"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "PK_8adc1334b1756bf0229b848f90c" PRIMARY KEY ("id", "brand")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD "product" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "PK_8adc1334b1756bf0229b848f90c"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "PK_617da352e61a454ece37c4e45e9" PRIMARY KEY ("id", "brand", "product")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "productBrand" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_578f63f0b7a38ba8632fa18aed7"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_12d512808f7f9098173798272f6" PRIMARY KEY ("codProductInMarket", "productBrand")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "market" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_12d512808f7f9098173798272f6"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_45233a6e23dffad8a70c2040814" PRIMARY KEY ("codProductInMarket", "productBrand", "market")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "productBrandId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "productBrandBrand" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "productBrandProduct" integer`, undefined);
        await queryRunner.query(`CREATE SEQUENCE "product_brand_id_seq" OWNED BY "product_brand"."id"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ALTER COLUMN "id" SET DEFAULT nextval('product_brand_id_seq')`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "FK_61e1d68944b25d18569ecba0c51" FOREIGN KEY ("productBrandId", "productBrandBrand", "productBrandProduct") REFERENCES "product_brand"("id","brand","product") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "FK_61e1d68944b25d18569ecba0c51"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ALTER COLUMN "id" DROP DEFAULT`, undefined);
        await queryRunner.query(`DROP SEQUENCE "product_brand_id_seq"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "productBrandProduct"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "productBrandBrand"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "productBrandId"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_45233a6e23dffad8a70c2040814"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_12d512808f7f9098173798272f6" PRIMARY KEY ("codProductInMarket", "productBrand")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "market"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP CONSTRAINT "PK_12d512808f7f9098173798272f6"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "PK_578f63f0b7a38ba8632fa18aed7" PRIMARY KEY ("codProductInMarket")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" DROP COLUMN "productBrand"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "PK_617da352e61a454ece37c4e45e9"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "PK_8adc1334b1756bf0229b848f90c" PRIMARY KEY ("id", "brand")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP COLUMN "product"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP CONSTRAINT "PK_8adc1334b1756bf0229b848f90c"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" ADD CONSTRAINT "PK_2eb5ce4324613b4b457c364f4a2" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "product_brand" DROP COLUMN "brand"`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD "productId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "product_market" ADD CONSTRAINT "FK_2bbc7de4507b03dba020b3b76b1" FOREIGN KEY ("productId") REFERENCES "product_brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
