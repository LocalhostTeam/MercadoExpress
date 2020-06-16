import { Module } from '@nestjs/common';
import { TypeOfDatabaseController } from './type-of-database.controller';
import { TypeOfDatabase } from './type-of-database.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfDatabaseService } from './type-of-database.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfDatabase])],
  controllers: [TypeOfDatabaseController],
  providers: [TypeOfDatabaseService],
})
export class TypeOfDatabaseModule {}
