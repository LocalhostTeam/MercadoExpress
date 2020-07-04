import { Entity, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Sell } from "src/sell/sell.entity";
import { ProductMarket } from "src/product-market/product-market.entity";

@Entity()
export class SaleProducts {
    @PrimaryColumn('integer')
    sellId: number;
    
    @ManyToOne(() => Sell)
    @JoinColumn({ name: 'sellId' })
    public sell!: Sell;

    @PrimaryColumn('integer')
    productMarketId: number;

    @ManyToOne(() => ProductMarket)
    @JoinColumn({ name: 'productMarketId' })
    public productMarket!: ProductMarket;

    @Column({ type: 'real', nullable: false })
    salePrice: number;

    @Column({ type: 'real', nullable: false })
    saleDiscount: number;

    @Column({ nullable: false })
    amount: number;
}