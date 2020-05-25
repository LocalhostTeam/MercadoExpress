import { Entity, PrimaryColumn, ManyToOne, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Product } from 'src/product/product.entity';
import { Brand } from 'src/brand/brand.entity';
import { Market } from 'src/market/market.entity';

@Entity()
export class ProductBrand {
    @PrimaryColumn({ type: 'integer'})
    marketId!: number;

    @OneToMany(type => Market, market => market.id)
    @JoinColumn({ name: 'marketId' })
    public markets!: Market[];
    
    @PrimaryColumn({ type: 'integer'})
    brandId!: number;
    
    @ManyToOne(type => Brand, brand => brand.productBrands)
    @JoinColumn({ name: 'brandId' })
    public brand!: Brand;

    @Column({length: 255})
    public image!: string;

    @Column()
    productId!: number;

    @ManyToOne(type => Product, product => product.productBrands)
    @JoinColumn({ name: 'productId' })
    public product!: Product;
}