import { Module } from '@nestjs/common';
import { ProductBrandController } from './product-brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBrand } from './product-brand.entity';
import { ProductBrandService } from './product-brand.service';
import { Product } from 'src/product/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductBrand, Product])],
  controllers: [ProductBrandController],
  providers: [ProductBrandService]
})
export class ProductBrandModule {}
