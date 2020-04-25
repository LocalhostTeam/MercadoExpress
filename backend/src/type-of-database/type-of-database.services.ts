
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Put } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOfDatabase } from './type-of-database.entity'; 

@Injectable()
export class TypeOfDatabaseServices {
    constructor(
        @InjectRepository(TypeOfDatabase)
        private readonly repository: Repository<TypeOfDatabase>,
    ) { }

    async getById(id:number): Promise<TypeOfDatabase> {
        return await this.repository.findOne({ id: id });
    }

    async getByType(type:string): Promise<TypeOfDatabase> {
        return await this.repository.findOne({type: type });
    }

    async postById(item: TypeOfDatabase) {
        await this.repository.save(item);
    }

    async post(item: TypeOfDatabase) {
        await this.repository.save(item);
    }

    async put(item: TypeOfDatabase) {
        await this.repository.save(item);
    }

    async delete(item: TypeOfDatabase) {
        await this.repository.delete(item);
    }
}