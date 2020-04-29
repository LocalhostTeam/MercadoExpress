import { TypeOfDatabase } from './type-of-database.entity';
import { EntityRepository, Repository } from 'typeorm';
import { TypeOfDatabaseDto } from './interfaces/type-of-database.dto';

@EntityRepository(TypeOfDatabase)
export class TypeOfDatabaseRepository extends Repository<TypeOfDatabase> {
    createBrand = async (typeOfDatabaseDto: TypeOfDatabase) => {
        return await this.save(typeOfDatabaseDto);
    };
}