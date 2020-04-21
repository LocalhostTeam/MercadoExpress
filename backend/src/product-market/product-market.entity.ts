import { Entity, PrimaryColumn, ManyToOne, Column } from "typeorm";
import { Market } from "src/market/market.entity";
import { ProductBrand } from "src/product-brand/product-brand.entity";

@Entity()
export class ProductMarket {
    @PrimaryColumn()
    @ManyToOne(() => ProductBrand)
    product: ProductBrand;

    @PrimaryColumn()
    @ManyToOne(() => Market)
    market: Market;

    @PrimaryColumn()
    codProductInMarket: number;

    @Column("real")
    discount: number;
}