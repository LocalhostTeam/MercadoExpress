import { Test, TestingModule } from '@nestjs/testing';
import { UnitOfMeasurementController } from './unit-of-measurement.controller';

describe('UnitOfMeasurement Controller', () => {
  let controller: UnitOfMeasurementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitOfMeasurementController],
    }).compile();

    controller = module.get<UnitOfMeasurementController>(UnitOfMeasurementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
