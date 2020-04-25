import { Module } from '@nestjs/common';
import { CityController } from './city.controller';

@Module({
  controllers: [CityController]
})
export class CityModule {}
