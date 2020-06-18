import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, getConnection, getRepository } from 'typeorm';
import { ProductBrand } from './product-brand.entity';

@Injectable()
export class ProductBrandService {
  constructor(
    @InjectRepository(ProductBrand)
    private readonly repository: Repository<ProductBrand>,
  ) {}

  async findAll() {
    const teste = await getRepository(ProductBrand)
      .createQueryBuilder('productBrand')
      .leftJoinAndSelect('productBrand.pack', 'pack')
      .select('pack.name, productBrand.shortName, productBrand.description')
      .getRawMany();

    return teste;
  }

  async findById(id: number) {
    const teste = await getRepository(ProductBrand)
      .createQueryBuilder('productBrand')
      .where('productBrand.id = :id', { id: id })
      .leftJoinAndSelect('productBrand.pack', 'pack')
      .leftJoinAndSelect('productBrand.brand', 'brand')
      .select(
        'productBrand.shortName, productBrand.description, brand.name as brand, pack.name as pack, productBrand.amount',
      )
      .getRawMany();

    return teste;
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
