import { Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { CategoryProduct } from "src/category-product/category-product.entity";

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
}