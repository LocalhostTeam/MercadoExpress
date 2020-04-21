import { Entity, PrimaryColumn, ManyToOne, Column } from "typeorm";
import { Product } from "src/product/product.entity";
import { Brand } from "src/brand/brand.entity";

@Entity()
export class ProductBrand {
    @PrimaryColumn()
    @ManyToOne(type => Product)
    product: Product;

    @PrimaryColumn()
    @ManyToOne(type => Brand)
    brand: Brand;

    @Column({length: 255})
    image: string;
}