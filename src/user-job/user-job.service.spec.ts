import { Test, TestingModule } from '@nestjs/testing';
import { UserJobService } from './user-job.service';

describe('UserJobService', () => {
  let service: UserJobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserJobService],
    }).compile();

    service = module.get<UserJobService>(UserJobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
