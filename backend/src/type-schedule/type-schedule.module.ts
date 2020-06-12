import { Module } from '@nestjs/common';
import { TypeScheduleController } from './type-schedule.controller';
import { TypeScheduleService } from './type-schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeSchedule } from './type-schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeSchedule])],
  controllers: [TypeScheduleController],
  providers: [TypeScheduleService]
})
export class TypeScheduleModule {}
