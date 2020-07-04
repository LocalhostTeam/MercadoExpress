import { Module } from '@nestjs/common';
import { SaleProductsController } from './sale-products.controller';
import { SaleProductsService } from './sale-products.service';

@Module({
  controllers: [SaleProductsController],
  providers: [SaleProductsService]
})
export class SaleProductsModule {}
