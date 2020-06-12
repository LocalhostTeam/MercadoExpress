import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Put, Get, Post, Delete, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductBrand } from './product-brand.entity';
import { Product } from 'src/product/product.entity';
import { Brand } from 'src/brand/brand.entity';

@Injectable()
export class ProductBrandService {
    service: any;
    sevice: any;
    constructor(
        @InjectRepository(ProductBrand)
        private readonly repository: Repository<ProductBrand>,
    ) { }
    
    async findAll(): Promise<ProductBrand[]> {
        return await this.repository.find();
    }

    async get(): Promise<Product[]> {
        return await this.service.find({ relations: ['productBrand']})
    }

    async find(): Promise<Brand[]> {
        return await this.sevice.find({ relations: ['productBrand']})
    }

    async create(productBrand: ProductBrand) {
        await this.repository.save(productBrand);
    }

    async update(id: number, productBrand:ProductBrand) {
        await this.repository.update(id, productBrand);
    }

    async delete(id: number) {
        await this.repository.delete(id);
    }
}