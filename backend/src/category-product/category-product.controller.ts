import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryProductService } from './category-product.service';
import { CategoryProduct } from './category-product.entity';

@Controller('category-product')
export class CategoryProductController {
  constructor(
    private readonly categoryProductService: CategoryProductService,
  ) {}

  @Get()
  async getAll() {
    return await this.categoryProductService.findAll();
  }

  @Post()
  async create(@Body() category: CategoryProduct) {
    return await this.categoryProductService.create(category);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() category: CategoryProduct) {
    return await this.categoryProductService.update(id, category);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.categoryProductService.delete(id);
  }
}
