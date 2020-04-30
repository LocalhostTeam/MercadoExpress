import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Put } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeSchedule } from './type-schedule.entity'; 

@Injectable()
export class TypeScheduleService {
    constructor(
        @InjectRepository(TypeSchedule)
        private readonly repository: Repository<TypeSchedule>,
    ) { }

    async get(id:number): Promise<TypeSchedule> {
        return await this.repository.findOne({ id: id });
    }

    async post(item: TypeSchedule) {
        await this.repository.save(item);
    }

    async put(item: TypeSchedule) {
        await this.repository.save(item);
    }

    async delete(item: TypeSchedule) {
        await this.repository.delete(item);
    }
}
