import { Brand } from './brand.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BrandDto } from './interfaces/brand.dto';

@EntityRepository(Brand)
export class BrandRepository extends Repository<Brand> {
    createBrand = async (brandDto: BrandDto) => {
        return await this.save(brandDto);
    };
}