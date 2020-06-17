import { Module } from '@nestjs/common';
import { UnitOfMeasurementController } from './unit-of-measurement.controller';
import { UnitOfMeasurementService } from './unit-of-measurement.service';

@Module({
  controllers: [UnitOfMeasurementController],
  providers: [UnitOfMeasurementService]
})
export class UnitOfMeasurementModule {}
