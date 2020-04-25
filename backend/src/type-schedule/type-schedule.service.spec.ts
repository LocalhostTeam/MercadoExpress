import { Test, TestingModule } from '@nestjs/testing';
import { TypeScheduleService } from './type-schedule.service';

describe('TypeScheduleService', () => {
  let service: TypeScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeScheduleService],
    }).compile();

    service = module.get<TypeScheduleService>(TypeScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
