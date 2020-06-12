import { Module } from '@nestjs/common';
import { TypeOfDatabaseController } from './type-of-database.controller';
import { TypeOfDatabase } from './type-of-database.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfDatabaseServices } from './type-of-database.services';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfDatabase])],
  controllers: [TypeOfDatabaseController],
  providers: [TypeOfDatabaseServices]
})
export class TypeOfDatabaseModule {}
