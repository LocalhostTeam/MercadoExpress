import { Module } from '@nestjs/common';
import { MeanOfPaymentController } from './mean-of-payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeanOfPaymentService } from './mean-of-payment.service';
import { MeanOfPayment } from './mean-of-payment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MeanOfPayment])],
  controllers: [MeanOfPaymentController],
  providers: [MeanOfPaymentService]
})
export class MeanOfPaymentModule {}
