import { Module } from '@nestjs/common';
import { StateController } from './state.controller';

@Module({
  controllers: [StateController]
})
export class StateModule {}
