import { MeanOfPayment } from './mean-of-payment.entity';
import { EntityRepository, Repository } from 'typeorm';
import { MeanOfPaymentDto } from './interfaces/mean-of-payment.dto';

@EntityRepository(MeanOfPayment)
export class MeanOfPaymentRepository extends Repository<MeanOfPayment> {
    createBrand = async (meanOfPaymentDto: MeanOfPaymentDto) => {
        return await this.save(meanOfPaymentDto);
    };
}