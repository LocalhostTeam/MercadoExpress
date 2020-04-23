
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Put } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './product.entity'; 

@Injectable()
export class ProductServices {
    constructor(
        @InjectRepository(Product)
        private readonly repository: Repository<Product>,
    ) { }

    async getById(id:number): Promise<Product> {
        return await this.repository.findOne({ id: id });
    }

    async postById(item: Product) {
        await this.repository.save(item);
    }

    async post(item: Product) {
        await this.repository.save(item);
    }

    async put(item:Product) {
        await this.repository.save(item);
    }

    async delete(item: Product) {
        await this.repository.delete(item);
    }
}