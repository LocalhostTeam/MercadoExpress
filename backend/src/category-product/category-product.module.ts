import { Module } from '@nestjs/common';
import { CategoryProductController } from './category-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryProduct } from './category-product.entity';
import { CategotyProductService } from 'src/categoty-product/categoty-product.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryProduct])],
  controllers: [CategoryProductController],
  providers: [CategotyProductService]
})
export class CategoryProductModule {}
