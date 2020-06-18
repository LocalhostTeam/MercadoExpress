import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitOfMeasure } from './unit-of-measure.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnitOfMeasurementService {
  constructor(
    @InjectRepository(UnitOfMeasure)
    private readonly repository: Repository<UnitOfMeasure>,
  ) {}

  async findAll(): Promise<UnitOfMeasure[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<UnitOfMeasure> {
    return await this.repository.findOne(id);
  }

  async create(unitOfMeasure: UnitOfMeasure) {
    await this.repository.save(unitOfMeasure);
  }

  async update(id: number, unitOfMeasure: UnitOfMeasure) {
    await this.repository.update(id, unitOfMeasure);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }
}
