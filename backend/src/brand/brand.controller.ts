
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BrandDto } from './interfaces/brand.dto';

@Controller('brand')
export class BrandController {
    @Get()
    getBrand() {
        return 'Aqui estão todas as marcas';
    }

    @Post()
    create(@Body() brandDto: BrandDto) {
        return brandDto;
    }

    @Get(':id')
    findOne(@Param('id') id:number) {
        return `A marca id ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: number) {
        return `Atulização do id da marca realizada com sucesso ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id:number) {
        return `Marca id removida com sucesso ${id}`;
    }
}
