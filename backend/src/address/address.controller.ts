import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AddressDto } from './interfaces/address.dto';
import { Address } from './address.entity';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(
        private readonly addressService: AddressService,
    ) { }

    // No retorno a função faz join entre as tables e retorna todos os dados do customer
    @Get (':id')
    async findByIdCustomer(@Param('id') id: number) {
        return this.addressService.findByIdCustomer(id);
    }

    // Ajeitar rota para ficar /'user'/show/'addressId'
    @Get (':customerId/show/:id')
    async findById(@Param('id') id: number) {
        return await this.addressService.findById(id);
    }

    @Post()
    async create(@Body() addressDto: AddressDto) {
        const address = new Address();

        address.cep = addressDto.cep;
        address.cityId = addressDto.cityId;
        address.district = addressDto.district;
        address.street = addressDto.street;
        address.number = addressDto.number;
        address.obs = addressDto.obs;

        return await this.addressService.create(address);
    }

    // Arrumar varchar do CEP
    @Put(':id')
    async update (@Param('id') id: number, @Body('address') addressDto: AddressDto) {
        const address = new Address();

        address.cep = addressDto.cep;
        address.cityId = addressDto.cityId;
        address.district = addressDto.district;
        address.street = addressDto.street;
        address.number = addressDto.number;
        address.obs = addressDto.obs;

        return await this.addressService.update(id, address);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.addressService.delete(id);
    }
}
