import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import {
  Repository,
  getRepository,
  getConnection,
  createQueryBuilder,
} from 'typeorm';
import { ProductBrand } from './product-brand.entity';
import { createConnection } from 'net';

@Injectable()
export class ProductBrandService {
  constructor(
    @InjectRepository(ProductBrand)
    private readonly repository: Repository<ProductBrand>,
  ) {}

  async findAll(): Promise<ProductBrand[]> {
    return await this.repository.find({ relations: ['brand'] });
  }

  async findById(id: number): Promise<ProductBrand[]> {
    return await this.repository.find({
      where: { id: id },
      relations: ['pack', 'brand', 'product', 'unitOfMeasure'],
    });
  }

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
