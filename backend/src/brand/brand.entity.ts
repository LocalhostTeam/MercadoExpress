import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ProductBrand } from "src/product-brand/product-brand.entity";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false })
    name: string;

    @OneToMany(type => ProductBrand, productBrand => productBrand.brand)
    public productBrands!: ProductBrand[];
}