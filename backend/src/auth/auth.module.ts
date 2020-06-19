import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { CustomerModule } from 'src/customer/customer.module';

@Module({
  imports: [CustomerModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
