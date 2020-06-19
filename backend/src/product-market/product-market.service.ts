import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductMarket } from './product-market.entity';
import { Repository, getRepository } from 'typeorm';

@Injectable()
export class ProductMarketService {
  constructor(
    @InjectRepository(ProductMarket)
    private readonly repository: Repository<ProductMarket>,
  ) {}

  async findAll() {
    const all = await getRepository(ProductMarket)
      .createQueryBuilder('productMarket')
      .leftJoinAndSelect('productMarket.productBrand', 'productBrand')
      .leftJoinAndSelect('productBrand.pack', 'pack')
      .leftJoinAndSelect('productBrand.brand', 'brand')
      .leftJoinAndSelect('productBrand.unitOfMeasure', 'unit')
      .leftJoinAndSelect('productBrand.product', 'product')
      .leftJoinAndSelect('product.categoryProduct', 'category')
      .getMany();

    return all;
  }

  async findById(id: number) {
    const single = await getRepository(ProductMarket)
      .createQueryBuilder('productMarket')
      .where('productBrand.id = :id', { id: id })
      .leftJoinAndSelect('productMarket.productBrand', 'productBrand')
      .leftJoinAndSelect('productBrand.pack', 'pack')
      .leftJoinAndSelect('productBrand.brand', 'brand')
      .leftJoinAndSelect('productBrand.unitOfMeasure', 'unit')
      .leftJoinAndSelect('productBrand.product', 'product')
      .leftJoinAndSelect('product.categoryProduct', 'category')
      .select()
      .getMany();

    return single;
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
