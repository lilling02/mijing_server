import { Test, TestingModule } from '@nestjs/testing';
import { PostitemController } from './postitem.controller';
import { PostitemService } from './postitem.service';

describe('PostitemController', () => {
  let controller: PostitemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostitemController],
      providers: [PostitemService],
    }).compile();

    controller = module.get<PostitemController>(PostitemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
