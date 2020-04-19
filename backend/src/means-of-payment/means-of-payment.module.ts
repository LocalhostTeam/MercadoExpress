import { Module } from '@nestjs/common';
import { MeansOfPaymentController } from './means-of-payment.controller';

@Module({
  controllers: [MeansOfPaymentController]
})
export class MeansOfPaymentModule {}
