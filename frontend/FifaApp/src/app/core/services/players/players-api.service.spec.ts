import { TestBed } from '@angular/core/testing';

import { PlayersApiService } from './players-api.service';

describe('PlayersApiService', () => {
  let service: PlayersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
