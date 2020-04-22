import { Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from "typeorm";
import { CategoryProduct } from "src/category-product/category-product.entity";
import { ProductBrand } from "src/product-brand/product-brand.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => CategoryProduct)
    categoryProduct: CategoryProduct;

    @Column({length: 255})
    fullName: string;

    @Column({length: 50})
    shortName: string;

    @OneToMany(type => ProductBrand, productBrand => productBrand.product)
    public productBrands!: ProductBrand[];
}