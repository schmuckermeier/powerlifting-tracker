import {Test} from '@nestjs/testing';

import {AppService} from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return list of sets', () => {
      expect(service.getData()).toEqual([{"reps": 4, "setNumber": 0, "weight": 50}]);
    });
  });
});
