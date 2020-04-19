import { Test, TestingModule } from '@nestjs/testing';
import { MeansOfPaymentController } from './means-of-payment.controller';

describe('MeansOfPayment Controller', () => {
  let controller: MeansOfPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeansOfPaymentController],
    }).compile();

    controller = module.get<MeansOfPaymentController>(MeansOfPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
