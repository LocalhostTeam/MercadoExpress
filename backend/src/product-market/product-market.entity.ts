import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from "typeorm";
import { Market } from "src/market/market.entity";
import { ProductBrand } from "src/product-brand/product-brand.entity";

@Entity()
export class ProductMarket {
    @PrimaryColumn("integer")
    brandId: number;

    @PrimaryColumn("integer")
    productId: number;

    @ManyToOne(() => ProductBrand)
    @JoinColumn([
        { name: "brandId", referencedColumnName: "brandId" },
        { name: "productId", referencedColumnName: "productId" }
    ])
    public productBrand!: ProductBrand;

    @PrimaryColumn("integer")
    marketId: number;
    
    @ManyToOne(() => Market, market => market.id)
    @JoinColumn({ name: 'marketId' })
    public market!: Market;

    @PrimaryColumn()
    codProductInMarket: number;

    @Column("real")
    price: number;

    @Column("real")
    discount: number;

    @Column()
    quantity: number;
}