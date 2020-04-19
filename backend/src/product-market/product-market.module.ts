import { Module } from '@nestjs/common';
import { ProductMarketController } from './product-market.controller';

@Module({
  controllers: [ProductMarketController]
})
export class ProductMarketModule {}
