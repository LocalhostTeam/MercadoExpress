import { Module } from '@nestjs/common';
import { PackController } from './pack.controller';
import { PackService } from './pack.service';
import { Pack } from './pack.entity';
import { ProductBrand } from 'src/product-brand/product-brand.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pack, ProductBrand])],
  controllers: [PackController],
  providers: [PackService],
})
export class PackModule {}
