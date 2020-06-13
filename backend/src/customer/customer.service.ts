import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private repository: Repository<Customer>
    ) { }

    async findAll(): Promise<Customer[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Customer> {
        return await this.repository.findOne({ id: id});
    }
    
    async create(customer: Customer) {
        console.log(Customer);
        await this.repository.save(customer);
    }

    async update(id: number, customer: Customer) {
        await this.repository.update(id, customer);
    }

    async delete(id: number) {
        await this.repository.delete(id);
    }
}
