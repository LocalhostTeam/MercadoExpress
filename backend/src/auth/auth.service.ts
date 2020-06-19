import { Injectable } from '@nestjs/common';
import { CustomerService } from 'src/customer/customer.service';

@Injectable()
export class AuthService {
  constructor(private customerServices: CustomerService) {}

  public async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.customerServices.findByUser(username);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
