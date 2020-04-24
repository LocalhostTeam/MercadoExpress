
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductBrandDto} from './interfaces/product-brand.dto';

@Controller('product-brand')
export class ProductBrandController {
    @Get()
    getProductBrand() {
        return 'Aqui estão todos os produtos desta marca';
    }

    @Post()
    create(@Body() productBrandDto: ProductBrandDto) {
        return productBrandDto;
    }

    @Get(':id')
    findOne(@Param(':id') id: number) {
        return `O produto com este id ${id}`;
    }

    @Put(':id')
    update(@Param ('id') id: number) {
        return `Atualização realizada com sucesso ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return `Produto removido com sucesso ${id}`;
    }
}
