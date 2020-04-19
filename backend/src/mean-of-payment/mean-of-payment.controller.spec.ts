import { Test, TestingModule } from '@nestjs/testing';
import { MeanOfPaymentController } from './mean-of-payment.controller';

describe('MeanOfPayment Controller', () => {
  let controller: MeanOfPaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeanOfPaymentController],
    }).compile();

    controller = module.get<MeanOfPaymentController>(MeanOfPaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
