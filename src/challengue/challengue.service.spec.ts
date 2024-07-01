import { Test, TestingModule } from '@nestjs/testing';
import { ChallengueService } from './challengue.service';

describe('ChallengueService', () => {
  let service: ChallengueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChallengueService],
    }).compile();

    service = module.get<ChallengueService>(ChallengueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
