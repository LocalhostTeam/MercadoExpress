import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './state.entity';

@Injectable()
export class StateService {
    constructor(
        @InjectRepository(State)
        private repository: Repository<State>
    ) { }

    async findAll(): Promise<State[]> {
        return await this.repository.find();
    }

    async findByAcronym(acronym: string): Promise<State> {
        console.log('findByState');
        return await this.repository.findOne({ acronym: acronym });
    }

    async create(state: State) {
        await this.repository.save(state);
    }

    async update(id: number, state: State) {
        await this.repository.update(id, state);
    }

    async delete(id: number) {
        await this.repository.delete(id);
    }
}