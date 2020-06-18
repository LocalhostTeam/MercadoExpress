import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { Brand } from './brand.entity';
import { ProductBrand } from 'src/product-brand/product-brand.entity';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  async getAll() {
    return await this.brandService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.brandService.findById(id);
  }

  @Get('list/:id')
  async getByIdProducts(@Param('id') id: number) {
    return await this.brandService.findByIdProducts(id);
  }

  @Post()
  async create(@Body() brand: Brand) {
    return await this.brandService.create(brand);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() brand: Brand) {
    return await this.brandService.update(id, brand);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.brandService.delete(id);
  }
}
