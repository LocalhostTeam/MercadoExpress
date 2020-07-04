import { Test, TestingModule } from '@nestjs/testing';
import { SaleProductsController } from './sale-products.controller';

describe('SaleProducts Controller', () => {
  let controller: SaleProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleProductsController],
    }).compile();

    controller = module.get<SaleProductsController>(SaleProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
