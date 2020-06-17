import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from "typeorm";
import { Market } from "src/market/market.entity";
import { ProductBrand } from "src/product-brand/product-brand.entity";

@Entity()
export class ProductMarket {
    @PrimaryColumn('integer')
    productBrandId: number;

    @ManyToOne(() => ProductBrand)
    @JoinColumn({ name: 'productBrandId' })
    public productBrand!: ProductBrand;

    @PrimaryColumn('integer')
    marketId: number;
    
    @ManyToOne(() => Market, market => market.id)
    @JoinColumn({ name: 'marketId' })
    public market!: Market;

    @Column({ nullable: false })
    codProductInMarket: number;

    @Column({ type: 'real', nullable: false })
    price: number;

    @Column({ type: 'real', nullable: false })
    discount: number;

    @Column({ nullable: false })
    quantity: number;
}