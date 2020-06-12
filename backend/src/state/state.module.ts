import { Module } from '@nestjs/common';
import { StateController } from './state.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from './state.entity';
import { StateService } from './state.service';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  controllers: [StateController],
  providers: [StateService],
  exports: [StateService]
})
export class StateModule {}
