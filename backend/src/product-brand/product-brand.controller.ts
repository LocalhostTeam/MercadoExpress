import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductBrandService } from './product-brand.service';
import { ProductBrand } from './product-brand.entity';

@Controller('product-brand')
export class ProductBrandController {
  constructor(private readonly productBrandService: ProductBrandService) {}

  @Get()
  async getAll() {
    return await this.productBrandService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.productBrandService.findById(id);
  }

  @Post()
  async create(@Body() productBrand: ProductBrand) {
    return await this.productBrandService.create(productBrand);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() productBrand: ProductBrand) {
    return await this.productBrandService.update(id, productBrand);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.productBrandService.delete(id);
  }
}
