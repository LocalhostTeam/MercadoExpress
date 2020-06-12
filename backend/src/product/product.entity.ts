import { Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, JoinColumn } from "typeorm";
import { CategoryProduct } from "src/category-product/category-product.entity";
import { ProductBrand } from "src/product-brand/product-brand.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    fullName: string;

    @Column({length: 50})
    shortName: string;

    @Column()
    categoryProductId: number;

    @ManyToOne(type => CategoryProduct)
    @JoinColumn({ name: 'categoryProductId' })
    categoryProduct: CategoryProduct;

    @OneToMany(type => ProductBrand, productBrand => productBrand.productId)
    public productBrands!: ProductBrand[];
}