import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';
import { Repository } from 'typeorm';
import { State } from 'src/state/state.entity';

@Injectable()
export class CityService {
    constructor(
        @InjectRepository(City)
        private repository: Repository<City>
    ) { }

    async findAll(): Promise<City[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<City> {
        return await this.repository.findOne({ id: id});
    }

    async findByState(state: State): Promise<City[]> {
        // console.log(state);
        return await this.repository.find({ where:{ state: state }, relations: ['state'] });
    }

    async findWithState(id: number): Promise<City> {
        return await this.repository.findOne({ where: { id: id}, relations: ['state'] });
    }

    async create(city: City) {
        // console.log(city);
        await this.repository.save(city);
    }

    async update(id: number, city: City) {
        await this.repository.update(id, city);
    }

    async delete(id: number) {
        await this.repository.delete(id);
    }
}
