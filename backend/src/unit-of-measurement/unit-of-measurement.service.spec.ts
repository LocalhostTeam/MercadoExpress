import { Test, TestingModule } from '@nestjs/testing';
import { UnitOfMeasurementService } from './unit-of-measurement.service';

describe('UnitOfMeasurementService', () => {
  let service: UnitOfMeasurementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitOfMeasurementService],
    }).compile();

    service = module.get<UnitOfMeasurementService>(UnitOfMeasurementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
