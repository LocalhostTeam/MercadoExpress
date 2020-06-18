import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TypeOfDatabaseDto } from './interfaces/type-of-database.dto';
import { TypeOfDatabaseService } from './type-of-database.service';
import { TypeOfDatabase } from './type-of-database.entity';

@Controller('type-of-database')
export class TypeOfDatabaseController {
  constructor(private readonly typeOfDataBaseService: TypeOfDatabaseService) {}

  @Get()
  async getAll() {
    return await this.typeOfDataBaseService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.typeOfDataBaseService.findById(id);
  }

  @Post()
  async create(@Body() typeOfDatabaseDto: TypeOfDatabaseDto) {
    const typeOfDataBase = new TypeOfDatabase();

    typeOfDataBase.name = typeOfDatabaseDto.name;
    typeOfDataBase.plugin = typeOfDatabaseDto.plugin;

    return await this.typeOfDataBaseService.create(typeOfDataBase);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() typeOfDatabaseDto: TypeOfDatabaseDto,
  ) {
    const typeOfDataBase = new TypeOfDatabase();

    typeOfDataBase.name = typeOfDatabaseDto.name;
    typeOfDataBase.plugin = typeOfDatabaseDto.plugin;

    return await this.typeOfDataBaseService.update(id, typeOfDataBase);
  }

  //   @Delete(':id')
  //   async remove(@Param('id') id: number) {
  //     return await this.typeOfDataBaseService.delete(id);
  //   }
}
