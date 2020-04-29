import { ProductBrand } from './product-brand.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ProductBrandDto } from './interfaces/product-brand.dto';

@EntityRepository(ProductBrand)
export class ProductBrandRepository extends Repository<ProductBrand> {
    createBrand = async (productBrandDto: ProductBrandDto) => {
        return true;
        //await this.save(productBrandDto);
    };
}