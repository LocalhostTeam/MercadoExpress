import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Market } from './market.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarketService {
  constructor(
    @InjectRepository(Market)
    private readonly repository: Repository<Market>,
  ) {}

  async findAll(): Promise<Market[]> {
    return await this.repository.find();
  }
}
