import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { City } from 'src/city/city.entity';
import { Customer } from 'src/customer/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private repository: Repository<Address>
    ) { }

    async findAll(): Promise<Address[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Address> {
        return await this.repository.findOne({ id: id });
    }

    async findByIdCustomer(customerId: number): Promise<Address[]> {
        return await this.repository.find({ where:{ customerId: customerId }, relations: ['customer'] });
    }

    async create(address: Address) {
        await this.repository.save(address);
    }

    async update(id: number, address: Address) {
        await this.repository.update(id, address);
    }

    async delete(id: number) {
        await this.repository.delete(id);
    }
}
