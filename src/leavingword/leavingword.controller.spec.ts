import { Test, TestingModule } from '@nestjs/testing';
import { LeavingwordController } from './leavingword.controller';
import { LeavingwordService } from './leavingword.service';

describe('LeavingwordController', () => {
  let controller: LeavingwordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeavingwordController],
      providers: [LeavingwordService],
    }).compile();

    controller = module.get<LeavingwordController>(LeavingwordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
