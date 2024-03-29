import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Put } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity'; 
import { ProductBrand } from 'src/product-brand/product-brand.entity';
import { Brand } from 'src/brand/brand.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly repository: Repository<Product>,
    ) { }
    
    async findAll(): Promise<Product[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Product> {
        return await this.repository.findOne({ id: id });
    }

    // async find(): Promise<Brand[]> {
    //     return await this.repository.find({ relations: ['product']})
    // }

    async create(product: Product) {
        await this.repository.save(product);
    }

    async update(id: number, product: Product) {
        await this.repository.update(id, product);
    }

    async delete(id: number) {
        await this.repository.delete(id);
    }
}