
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductDto } from './interfaces/product.dto';

@Controller('product')
export class ProductController {
    @Get()
    getProduct() {
        return 'Aqui estão todos os produtos';
    }

    @Post()
    create(@Body() productDto: ProductDto) {
        return productDto;
    }

    @Get (':id')
    findOne(@Param('id') id: string) {
        return `O produto id ${id}`;
    }

    @Put(':id')
    update (@Param('id') id: string) {
        return `A atualização do produto foi realizada com sucesso ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Produto removido com sucesso ${id}`;
    }
}
