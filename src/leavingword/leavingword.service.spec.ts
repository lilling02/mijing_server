import { Test, TestingModule } from '@nestjs/testing';
import { LeavingwordService } from './leavingword.service';

describe('LeavingwordService', () => {
  let service: LeavingwordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeavingwordService],
    }).compile();

    service = module.get<LeavingwordService>(LeavingwordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
