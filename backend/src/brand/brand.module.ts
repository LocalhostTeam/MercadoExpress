import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { Brand } from './brand.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandService } from './brand.service';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
