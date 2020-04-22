import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from "typeorm";
import { Market } from "src/market/market.entity";
import { ProductBrand } from "src/product-brand/product-brand.entity";

@Entity()
export class ProductMarket {
    @PrimaryColumn("integer")
    @ManyToOne(() => ProductBrand)
    @JoinColumn([
        { name: "brandId", referencedColumnName: "brand" },
        { name: "productId", referencedColumnName: "product" }
    ])
    public productBrand!: ProductBrand;

    @PrimaryColumn("integer")
    @ManyToOne(() => Market, market => market.id)
    public market!: Market;

    @PrimaryColumn()
    codProductInMarket: number;

    @Column("real")
    discount: number;
}