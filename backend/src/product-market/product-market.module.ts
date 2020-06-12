import { Module } from '@nestjs/common';
import { ProductMarketController } from './product-market.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductMarket } from './product-market.entity';
import { ProductMarketService } from './product-market.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductMarket])],
  controllers: [ProductMarketController],
  providers: [ProductMarketService]
})
export class ProductMarketModule {}
