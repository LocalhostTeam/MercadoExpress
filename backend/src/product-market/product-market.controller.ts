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

  @Get()
  async getAll() {
    return await this.productMarketService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.productMarketService.findById(id);
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
