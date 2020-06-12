import { Test, TestingModule } from '@nestjs/testing';
import { ProductMarketService } from './product-market.service';

describe('ProductMarketService', () => {
  let service: ProductMarketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductMarketService],
    }).compile();

    service = module.get<ProductMarketService>(ProductMarketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
