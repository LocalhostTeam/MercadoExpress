import { Module } from '@nestjs/common';
import { TypeScheduleController } from './type-schedule.controller';
import { TypeScheduleService } from './type-schedule.service';

@Module({
  controllers: [TypeScheduleController],
  providers: [TypeScheduleService]
})
export class TypeScheduleModule {}
