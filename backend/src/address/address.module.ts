import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { Address } from './address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressService } from './address.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService]
  
})
export class AddressModule {}
