import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';

@Module({
  controllers: [BrandController]
})
export class BrandModule {}
