import { Product } from './product.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ProductDto } from './interfaces/product.dto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    createBrand = async (productDto: ProductDto) => {
        return await this.save(productDto);
    };
}