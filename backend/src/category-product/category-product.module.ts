import { Module } from '@nestjs/common';
import { CategoryProductController } from './category-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryProduct } from './category-product.entity';
import { CategoryProductService } from './category-product.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryProduct])],
  controllers: [CategoryProductController],
  providers: [CategoryProductService]
})
export class CategoryProductModule {}
