import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AddressDto } from './interfaces/address.dto';
import { Address } from './address.entity';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(
        private readonly addressService: AddressService,
    ) { }

    @Get (':id')
    async findById(@Param('id') id: number) {
        return this.addressService.findById(id);
    }

    @Get ('customer/:id')
    async findByCustomer(@Param('id') id: number) {
        return await this.addressService.findByCustomer(id);
    }

    @Post()
    async create(@Body() addressDto: AddressDto) {
        const address = new Address();

        address.customerId = addressDto.customerId;
        address.marketId = addressDto.marketId;
        address.cep = addressDto.cep;
        address.cityId = addressDto.cityId;
        address.district = addressDto.district;
        address.street = addressDto.street;
        address.number = addressDto.number;
        address.obs = addressDto.obs;

        return await this.addressService.create(address);
    }

    @Put(':id')
    async update (@Param('id') id: number, @Body() addressDto: AddressDto) {
        const address = new Address();

        address.cep = addressDto.cep;
        address.cityId = addressDto.cityId;
        address.district = addressDto.district;
        address.street = addressDto.street;
        address.number = addressDto.number;
        address.obs = addressDto.obs;
        address.customerId = addressDto.customerId;
        address.marketId = addressDto.marketId;

        return await this.addressService.update(id, address);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.addressService.delete(id);
    }
}
