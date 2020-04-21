import { Test, TestingModule } from '@nestjs/testing';
import { ProductBrandController } from './product-brand.controller';

describe('ProductBrand Controller', () => {
  let controller: ProductBrandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductBrandController],
    }).compile();

    controller = module.get<ProductBrandController>(ProductBrandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
