import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
    constructor (
        private readonly productService: ProductService
    ) {}

    @Get()
    getAllProduct() {
        return this.productService.findAll();
    }

    @Get (':id')
    getById(@Param('id') id: number) {
        return this.productService.findById(id);
    }

    @Post()
    create(@Body() product: Product) {
        return this.productService.create(product);
    }    

    @Put(':id')
    update (@Param('id') id: number, @Body() product: Product) {
        return this.productService.update(id, product);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.productService.delete(id);
    }
}
