import { Entity, PrimaryColumn, ManyToOne, Column, ManyToMany, JoinTable, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Product } from "src/product/product.entity";
import { Brand } from "src/brand/brand.entity";
import { Market } from "src/market/market.entity";

@Entity()
export class ProductBrand {
    @PrimaryColumn("integer")
    @ManyToOne(type => Brand, brand => brand.productBrands)
    public brand!: Brand;
    
    @PrimaryColumn("integer")
    @ManyToOne(type => Product, product => product.productBrands)
    public product!: Product;

    @Column({length: 255})
    public image!: string;

    @OneToMany(type => Market, market => market.id)
    public markets!: Market[];
}