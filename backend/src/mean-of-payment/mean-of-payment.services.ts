
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Put } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MeanOfPayment } from './mean-of-payment.entity'; 

@Injectable()
export class MeanOfPaymentServices {
    constructor(
        @InjectRepository(MeanOfPayment)
        private readonly repository: Repository<MeanOfPayment>,
    ) { }

    async getById(id:number): Promise<MeanOfPayment> {
        return await this.repository.findOne({ id: id });
    }

    async getByType(type:string): Promise<MeanOfPayment> {
        return await this.repository.findOne({type: type });
    }

    async postById(item: MeanOfPayment) {
        await this.repository.save(item);
    }

    async post(item: MeanOfPayment) {
        await this.repository.save(item);
    }

    async put(item: MeanOfPayment) {
        await this.repository.save(item);
    }

    async delete(item: MeanOfPayment) {
        await this.repository.delete(item);
    }
}