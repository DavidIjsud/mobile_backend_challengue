import { Test, TestingModule } from '@nestjs/testing';
import { ChallengueController } from './challengue.controller';
import { ChallengueService } from './challengue.service';

describe('ChallengueController', () => {
  let controller: ChallengueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChallengueController],
      providers: [ChallengueService],
    }).compile();

    controller = module.get<ChallengueController>(ChallengueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
