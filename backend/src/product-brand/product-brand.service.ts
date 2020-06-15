import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Put, Get, Post, Delete, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductBrand } from './product-brand.entity';
import { Product } from 'src/product/product.entity';
import { Brand } from 'src/brand/brand.entity';

@Injectable()
export class ProductBrandService {
    constructor(
        @InjectRepository(ProductBrand)
        private readonly repository: Repository<ProductBrand>,
    ) {}

    async findAll(): Promise<ProductBrand[]> {
        return await this.repository.find();
    }

    async getProductBrand(brandId: number): Promise<ProductBrand[]> {
        return await this.repository.find({
            where: { brandId: brandId },
        });
    }

    async findById(id: number): Promise<ProductBrand> {
        return await this.repository.findOne(id);
    }

    // async find(): Promise<Brand[]> {
    //     return await this.repository.find({ relations: ['productBrand'] });
    // }

    async create(productBrand: ProductBrand) {
        await this.repository.save(productBrand);
    }

    async update(id: number, productBrand: ProductBrand) {
        await this.repository.update(id, productBrand);
    }

    async delete(id: number) {
        await this.repository.delete(id);
    }
}
