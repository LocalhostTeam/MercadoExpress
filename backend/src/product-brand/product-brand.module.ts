import { Module } from '@nestjs/common';
import { ProductBrandController } from './product-brand.controller';

@Module({
  controllers: [ProductBrandController]
})
export class ProductBrandModule {}
