import { TestBed } from '@angular/core/testing';

import { DmxApiService } from './dmx-api.service';

describe('DmxApiService', () => {
  let service: DmxApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmxApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
