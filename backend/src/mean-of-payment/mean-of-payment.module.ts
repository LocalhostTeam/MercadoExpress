import { Module } from '@nestjs/common';
import { MeanOfPaymentController } from './mean-of-payment.controller';

@Module({
  controllers: [MeanOfPaymentController]
})
export class MeanOfPaymentModule {}
