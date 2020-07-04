import { Module } from '@nestjs/common';
import { SellController } from './sell.controller';
import { SellService } from './sell.service';

@Module({
  controllers: [SellController],
  providers: [SellService]
})
export class SellModule {}
