import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { City } from './city.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityService } from './city.service';
import { State } from 'src/state/state.entity';
import { StateService } from 'src/state/state.service';

@Module({
  imports: [TypeOrmModule.forFeature([City, State])],
  controllers: [CityController],
  providers: [CityService, StateService]
})
export class CityModule {}
