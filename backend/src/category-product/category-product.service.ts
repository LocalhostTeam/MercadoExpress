import { Injectable } from '@nestjs/common';
import { CategoryProduct } from './category-product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryProductService {
  constructor(
    @InjectRepository(CategoryProduct)
    private repository: Repository<CategoryProduct>,
  ) {}

  async findAll(): Promise<CategoryProduct[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<CategoryProduct> {
    return await this.repository.findOne({ id: id });
  }

  async create(category: CategoryProduct) {
    return await this.repository.save(category);
  }

  async update(id: number, category: CategoryProduct) {
    await this.repository.update(id, category);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }
}
