
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MeanOfPaymentDto } from './interfaces/mean-of-payment.dto';

@Controller('mean-of-payment')
export class MeanOfPaymentController {
    @Get()
    getMeanOfPayment() {
        return 'Aqui estão todos os tipos de pagamento';
    }

    @Post()
    create(@Body() meanOfPaymentDto: MeanOfPaymentDto) {
        return meanOfPaymentDto;
    }

    @Get(':id')
    findOne(@Param(':id') id: number) {
        return `O meio de pagamento solicitado ${id}`;
    }

    @Put(':id')
    update(@Param ('id') id: number) {
        return `Atualização realizada com sucesso ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return `Meio de pagamento removido com sucesso ${id}`;
    }
}
