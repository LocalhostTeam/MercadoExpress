
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Put, Get, Post, Delete } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductBrand } from './product-brand.entity'; 
import { Product } from 'src/product/product.entity';

@Injectable()
export class ProductBrandServices {
    constructor(
        @InjectRepository(ProductBrand)
        private readonly repository: Repository<ProductBrand>,
    ) { }
    
    async get(item: ProductBrand) {
         await this.repository.findOne(item);
    }

    async getByProduct(item: number) {
        await this.repository.findOne();
   }

    async getByBrand(item: number) {
        await this.repository.findOne();
    }

    async post(item: ProductBrand) {
        await this.repository.save(item);
    }

    async put(item:ProductBrand) {
        await this.repository.save(item);
    }

    async delete(item: ProductBrand) {
        await this.repository.delete(item);
    }
}