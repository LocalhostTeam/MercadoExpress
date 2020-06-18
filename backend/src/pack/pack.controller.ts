import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PackService } from './pack.service';
import { Pack } from './pack.entity';

@Controller('pack')
export class PackController {
  constructor(private readonly packService: PackService) {}

  @Get()
  async getAll() {
    return await this.packService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.packService.findById(id);
  }

  @Post()
  async create(@Body() pack: Pack) {
    return await this.packService.create(pack);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() pack: Pack) {
    return await this.packService.update(id, pack);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.packService.delete(id);
  }
}
