import { Test, TestingModule } from '@nestjs/testing';
import { ProductMarketController } from './product-market.controller';

describe('ProductMarket Controller', () => {
  let controller: ProductMarketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductMarketController],
    }).compile();

    controller = module.get<ProductMarketController>(ProductMarketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
