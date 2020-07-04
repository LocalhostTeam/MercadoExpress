import { Test, TestingModule } from '@nestjs/testing';
import { SaleProductsService } from './sale-products.service';

describe('SaleProductsService', () => {
  let service: SaleProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleProductsService],
    }).compile();

    service = module.get<SaleProductsService>(SaleProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
