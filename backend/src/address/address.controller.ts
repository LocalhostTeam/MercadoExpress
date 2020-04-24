
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AddressDto } from './interfaces/address.dto';

@Controller('address')
export class AddressController {
    @Get (':id')
    findOne(@Param('id') id: string) {
        return `O endereço id ${id}`;
    }

    @Post()
    create(@Body() addressDto: AddressDto) {
        return addressDto;
    }

    @Put(':id')
    update (@Param('id') id: string) {
        return `A atualização foi realizada com sucesso ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Endereço removido com sucesso ${id}`;
    }
}
