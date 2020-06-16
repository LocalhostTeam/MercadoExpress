import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOfDatabase } from './type-of-database.entity';

@Injectable()
export class TypeOfDatabaseService {
  constructor(
    @InjectRepository(TypeOfDatabase)
    private readonly repository: Repository<TypeOfDatabase>,
  ) {}

  async findAll(): Promise<TypeOfDatabase[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<TypeOfDatabase> {
    return await this.repository.findOne({ id: id });
  }

  async create(typeOfDatabase: TypeOfDatabase) {
    await this.repository.save(typeOfDatabase);
  }

  async update(id: number, typeOfDatabase: TypeOfDatabase) {
    await this.repository.update(id, typeOfDatabase);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }
}
