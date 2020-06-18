import { Injectable } from '@nestjs/common';
import { Pack } from './pack.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PackService {
  constructor(
    @InjectRepository(Pack)
    private readonly repository: Repository<Pack>,
  ) {}

  async findAll(): Promise<Pack[]> {
    return await this.repository.find();
  }

  async findById(id: number): Promise<Pack> {
    return await this.repository.findOne(id);
  }

  async create(pack: Pack) {
    await this.repository.save(pack);
  }

  async update(id: number, pack: Pack) {
    await this.repository.update(id, pack);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }
}
