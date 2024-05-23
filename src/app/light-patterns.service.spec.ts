import { TestBed } from '@angular/core/testing';

import { LightPatternsService } from './light-patterns.service';

describe('LightPatternsService', () => {
  let service: LightPatternsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightPatternsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
