import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Brand } from './brand.entity';
import { ProductBrand } from 'src/product-brand/product-brand.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly repository: Repository<Brand>,
  ) {}

  async findAll(): Promise<Brand[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Brand> {
    return await this.repository.findOne({ id: id });
  }

  async findByIdProducts(id: number): Promise<Brand[]> {
    return await this.repository.find({
      where: { id: id },
      relations: ['productBrands'],
    });
  }

  async create(brand: Brand) {
    await this.repository.save(brand);
  }

  async update(id: number, brand: Brand) {
    await this.repository.update(id, brand);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }
}
