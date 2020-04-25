import { Test, TestingModule } from '@nestjs/testing';
import { TypeScheduleController } from './type-schedule.controller';

describe('TypeSchedule Controller', () => {
  let controller: TypeScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeScheduleController],
    }).compile();

    controller = module.get<TypeScheduleController>(TypeScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
