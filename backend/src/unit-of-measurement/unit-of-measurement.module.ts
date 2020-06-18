import { Module } from '@nestjs/common';
import { UnitOfMeasurementController } from './unit-of-measurement.controller';
import { UnitOfMeasurementService } from './unit-of-measurement.service';
import { UnitOfMeasure } from './unit-of-measure.entity';
import { ProductBrand } from 'src/product-brand/product-brand.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UnitOfMeasure, ProductBrand])],
  controllers: [UnitOfMeasurementController],
  providers: [UnitOfMeasurementService],
})
export class UnitOfMeasurementModule {}
