import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { Brand } from './brand.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandServices } from './brand.services';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  controllers: [BrandController],
  providers: [BrandServices]
})
export class BrandModule {}
