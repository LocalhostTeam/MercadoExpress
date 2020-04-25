import { Module } from '@nestjs/common';
import 'reflect-metadata';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { MarketModule } from './market/market.module';
import { AddressModule } from './address/address.module';
import { ProductModule } from './product/product.module';
import { CategoryProductModule } from './category-product/category-product.module';
import { ProductMarketModule } from './product-market/product-market.module';
import { MeanOfPaymentModule } from './mean-of-payment/mean-of-payment.module';
import { TypeOfDatabaseModule } from './type-of-database/type-of-database.module';
import { ProductBrandModule } from './product-brand/product-brand.module';
import { BrandModule } from './brand/brand.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { TypeScheduleModule } from './type-schedule/type-schedule.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [CustomerModule, MarketModule, AddressModule, ProductModule, CategoryProductModule, ProductMarketModule, MeanOfPaymentModule, TypeOfDatabaseModule, ProductBrandModule, BrandModule, StateModule, CityModule, TypeScheduleModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
