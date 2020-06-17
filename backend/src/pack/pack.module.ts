import { Module } from '@nestjs/common';
import { PackController } from './pack.controller';
import { PackService } from './pack.service';

@Module({
  controllers: [PackController],
  providers: [PackService]
})
export class PackModule {}
