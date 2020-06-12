import { Module } from '@nestjs/common';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';
import { Market } from './market.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Market])],
  controllers: [MarketController],
  providers: [MarketService]
})
export class MarketModule {}
