import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CityService } from './city.service';
import { City } from './city.entity';
import { StateService } from 'src/state/state.service';
import { State } from 'src/state/state.entity';

@Controller('city')
export class CityController {
    constructor(
        private readonly cityService: CityService,
        private readonly stateService: StateService
    ) { }

    @Get()
    async getAll() {
        return await this.cityService.findAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        return await this.cityService.findById(id);
    }

    @Get('state/:acronym')
    async getByState(@Param('acronym') acronym: string) {
        // console.log('getByState');
        let state = new State(); 
        state.acronym = acronym;
        return await this.cityService.findByState(state);
    }

    @Get('withsate/:id')
    async getByIdWithState(@Param('id') id: number) {
        // let city = new City();
        let city = await this.cityService.findWithState(id);
        // console.log(city);
        let result = await this.cityService.findByState(city.state);
        // console.log(result);
        return result;
    }

    @Post()
    async create(@Body() city: City) {
        return await this.cityService.create(city);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() city: City) {
        return await this.cityService.update(id, city);
    }
}
