import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductMarketService } from './product-market.service';
import { ProductMarket } from './product-market.entity';

@Controller('product-market')
export class ProductMarketController {
  constructor(private readonly productMarketService: ProductMarketService) {}

  @Get('market/:id')
  async getProductsByMarket(@Param('id') id: number) {
    return await this.productMarketService.findByMarket(id);
  }

  @Get('category-product/:id/:categoryId')
  async getProductsByCategory(
    @Param('id')
    id: number,
    @Param('categoryId')
    categoryId: number,
  ) {
    return await this.productMarketService.findByCategory(id, categoryId);
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.productMarketService.findById(id);
  }

  @Post()
  async create(@Body() productMarket: ProductMarket) {
    return await this.productMarketService.create(productMarket);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() productMarket: ProductMarket) {
    return await this.productMarketService.update(id, productMarket);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.productMarketService.delete(id);
  }
}
