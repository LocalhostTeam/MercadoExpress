
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TypeOfDatabaseDto } from './interfaces/type-of-database.dto';

@Controller('type-of-database')
export class TypeOfDatabaseController {
    @Get()
    getTypeOfDatabase() {
        return 'Aqui estão todos os tipos de base de dados';
    }

    @Post()
    create(@Body() typeOfDatabaseDto: TypeOfDatabaseDto) {
        return typeOfDatabaseDto;
    }

    @Get(':id')
    findOne(@Param(':id') id: number) {
        return `O id da base de dados solicitado ${id}`;
    }

    @Put(':id')
    update(@Param ('id') id: number) {
        return `Atualização realizada com sucesso ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return `Tipo de base de dados deletado com sucesso ${id}`;
    }
}
