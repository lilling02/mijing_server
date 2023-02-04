import { Test, TestingModule } from '@nestjs/testing';
import { PostitemService } from './postitem.service';

describe('PostitemService', () => {
  let service: PostitemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostitemService],
    }).compile();

    service = module.get<PostitemService>(PostitemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
