import { Module } from '@nestjs/common';
import { TypeOfDatabaseController } from './type-of-database.controller';

@Module({
  controllers: [TypeOfDatabaseController]
})
export class TypeOfDatabaseModule {}
