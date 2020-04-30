import { TypeSchedule } from './type-schedule.entity';
import { EntityRepository, Repository } from 'typeorm';
import { TypeScheduleDto } from './interfaces/type-schedule.dto';

@EntityRepository(TypeSchedule)
export class TypeScheduleRepository extends Repository<TypeSchedule> {
    createBrand = async (typeScheduleDto: TypeSchedule) => {
        return await this.save(typeScheduleDto);
    };
}