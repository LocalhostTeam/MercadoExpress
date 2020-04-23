
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Put, Delete, Get, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Brand } from './brand.entity'; 

@Injectable()
export class BrandServices {
    constructor(
        @InjectRepository(Brand)
        private readonly repository: Repository<Brand>,
    ) { }

    async getById(id:number): Promise<Brand> {
        return await this.repository.findOne({ id: id });
    }

    async postById(item: Brand) {
        await this.repository.save(item);
    }

    async post(item: Brand) {
        await this.repository.save(item);
    }

    async put(item:Brand) {
        await this.repository.save(item);
    }

    async delete(item: Brand) {
        await this.repository.delete(item);
    }
}