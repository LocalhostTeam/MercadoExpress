import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductMarket } from './product-market.entity';
import { Repository, getRepository, getConnection, getManager } from 'typeorm';
import { CategoryProduct } from 'src/category-product/category-product.entity';

@Injectable()
export class ProductMarketService {
  constructor(
    @InjectRepository(ProductMarket)
    private readonly repository: Repository<ProductMarket>,
  ) {}

  async findByMarket(id: number) {
    const all = await getRepository(ProductMarket)
      .createQueryBuilder('productMarket')
      .where('productMarket.marketId = :id', { id: id })
      .leftJoinAndSelect('productMarket.productBrand', 'productBrand')
      .leftJoinAndSelect('productBrand.pack', 'pack')
      .leftJoinAndSelect('productBrand.brand', 'brand')
      .leftJoinAndSelect('productBrand.unitOfMeasure', 'unit')
      .leftJoinAndSelect('productBrand.product', 'product')
      .leftJoinAndSelect('product.categoryProduct', 'category')
      .getMany();

    return all;
  }

  async findByCategory(id: number, categoryId: number) {
    const all = await getManager()
      .createQueryBuilder(ProductMarket, 'productMarket')
      .leftJoinAndSelect('productMarket.productBrand', 'productBrand')
      .leftJoinAndSelect('productBrand.pack', 'pack')
      .leftJoinAndSelect('productBrand.brand', 'brand')
      .leftJoinAndSelect('productBrand.unitOfMeasure', 'unit')
      .leftJoinAndSelect('productBrand.product', 'product')
      .leftJoinAndSelect('product.categoryProduct', 'category')
      .where('productMarket.marketId = :id', { id: id })
      .andWhere('category.id = :categoryId', { categoryId: categoryId })
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
      .getOne();

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
