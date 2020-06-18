import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductMarket } from './product-market.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductMarketService {
  constructor(
    @InjectRepository(ProductMarket)
    private readonly repository: Repository<ProductMarket>,
  ) {}

  async findAll(): Promise<ProductMarket[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<ProductMarket[]> {
    return await this.repository.find({
      where: { marketId: id },
      relations: ['productBrand'],
    });
  }

  async create(productMarket: ProductMarket) {
    await this.repository.save(productMarket);
  }

  async update(id: number, productMarket: ProductMarket) {
    await this.repository.update(id, productMarket);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }
}
