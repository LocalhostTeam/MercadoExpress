import { Test, TestingModule } from '@nestjs/testing';
import { TypeOfDatabaseController } from './type-of-database.controller';

describe('TypeOfDatabase Controller', () => {
  let controller: TypeOfDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeOfDatabaseController],
    }).compile();

    controller = module.get<TypeOfDatabaseController>(TypeOfDatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
