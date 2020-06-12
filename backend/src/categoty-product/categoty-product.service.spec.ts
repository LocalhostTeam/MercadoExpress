import { Test, TestingModule } from '@nestjs/testing';
import { CategotyProductService } from './categoty-product.service';

describe('CategotyProductService', () => {
  let service: CategotyProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategotyProductService],
    }).compile();

    service = module.get<CategotyProductService>(CategotyProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
