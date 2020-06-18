import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UnitOfMeasure } from './unit-of-measure.entity';
import { UnitOfMeasurementService } from './unit-of-measurement.service';

@Controller('unit-of-measurement')
export class UnitOfMeasurementController {
  constructor(
    private readonly unitOfMeasureService: UnitOfMeasurementService,
  ) {}

  @Get()
  async getAll() {
    return await this.unitOfMeasureService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.unitOfMeasureService.findById(id);
  }

  @Post()
  async create(@Body() unitOfMeasure: UnitOfMeasure) {
    return await this.unitOfMeasureService.create(unitOfMeasure);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() unitOfMeasure: UnitOfMeasure) {
    return await this.unitOfMeasureService.update(id, unitOfMeasure);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.unitOfMeasureService.delete(id);
  }
}
