import { Controller, Delete, Param, Get, Post, Body, Put } from '@nestjs/common';
import { StateService } from './state.service';
import { State } from './state.entity';

@Controller('state')
export class StateController {
    constructor(private service: StateService) { }

    @Get()
    async getAll() {
        return await this.service.findAll();
    }

    @Get(':acronym')
    async getById(@Param('acronym') acronym: string) {
        return await this.service.findByAcronym(acronym);
    }

    @Post()
    async create(@Body() state: State) {
        return await this.service.create(state);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() state: State) {
        return await this.service.update(id, state);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.service.delete(id);
    }
}