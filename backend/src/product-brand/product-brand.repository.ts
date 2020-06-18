import { ProductBrand } from './product-brand.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ProductBrand)
export class ProductBrandRepository extends Repository<ProductBrand> {
  createBrand = async (productBrand: ProductBrand) => {
    return true;
    //await this.save(productBrandDto);
  };
}
