import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';
import { CustomerDto } from './customer.dto';

@Controller('customer')
export class CustomerController {
    errors: any[];
    constructor(
        private readonly customerService: CustomerService,
    ) { }

    @Get()
    async getAll() {
        return await this.customerService.findAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) {
        return await this.customerService.findById(id);
    }

    @Post()
    async create(@Body() customerDto: CustomerDto) {
        const customer = new Customer();
         let error = true;
        
        if (customerDto.name.length > 3 && customerDto.name.length < 255) {
            customer.name = customerDto.name;
            customer.email = customerDto.email;
            customer.dateBirth = customerDto.dateBirth;
            customer.password = customerDto.password;
            customer.phone = customerDto.phone;

            error = false;
            }
        else {
             error = true;
        }
        if (!error){
            return await this.customerService.create(customer);
        }
        else {
            return 'Erro';
         }
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() customer: Customer) {
        return await this.customerService.update(id, customer);
    }
}

