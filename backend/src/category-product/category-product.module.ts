import { Module } from '@nestjs/common';
import { CategoryProductController } from './category-product.controller';

@Module({
  controllers: [CategoryProductController]
})
export class CategoryProductModule {}
