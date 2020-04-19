import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { MarketModule } from './market/market.module';
import { AddressModule } from './address/address.module';
import { ProductModule } from './product/product.module';
import { CategoryProductModule } from './category-product/category-product.module';
import { ProductMarketModule } from './product-market/product-market.module';
import { MeansOfPaymentModule } from './means-of-payment/means-of-payment.module';
import { MeanOfPaymentModule } from './mean-of-payment/mean-of-payment.module';

@Module({
  imports: [CustomerModule, MarketModule, AddressModule, ProductModule, CategoryProductModule, ProductMarketModule, MeansOfPaymentModule, MeanOfPaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
