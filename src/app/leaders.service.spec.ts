import { TestBed } from '@angular/core/testing';

import { LeadersService } from './leaders.service';

describe('LeadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadersService = TestBed.inject(LeadersService);
    expect(service).toBeTruthy();
  });
});
