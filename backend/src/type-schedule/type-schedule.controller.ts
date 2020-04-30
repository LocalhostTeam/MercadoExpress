import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TypeScheduleDto } from './interfaces/type-schedule.dto';

@Controller('type-schedule')
export class TypeScheduleController {
    @Get()
    getTypeSchedule() {
        return 'Aqui estão todos os tipos';
    }

    @Post()
    create(@Body() typeScheduleDto: TypeScheduleDto) {
        return typeScheduleDto;
    }

    @Get(':id')
    findOne(@Param('id') id:number) {
        return `O id solicitado ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: number) {
        return `Atulização do id foi realizada com sucesso ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id:number) {
        return `Id removido com sucesso ${id}`;
    }
}
