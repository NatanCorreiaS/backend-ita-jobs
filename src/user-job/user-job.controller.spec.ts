import { Test, TestingModule } from '@nestjs/testing';
import { UserJobController } from './user-job.controller';
import { UserJobService } from './user-job.service';

describe('UserJobController', () => {
  let controller: UserJobController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserJobController],
      providers: [UserJobService],
    }).compile();

    controller = module.get<UserJobController>(UserJobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
