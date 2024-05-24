import { TestBed } from '@angular/core/testing';

import { LightPattern, LightPatternsService } from './light-patterns.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';

describe('LightPatternsService', () => {
  let service: LightPatternsService;

  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightPatternsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default light patterns', async () => {
    let patterns = await firstValueFrom(service.patterns$);
    expect(patterns.length).toBe(2);
    expect(patterns[0].length).toBe(8);
  });

  it('should allow for modifying a light pattern', async () => {
    let patterns = await firstValueFrom(service.patterns$);
    let pattern: LightPattern = Object.assign({}, patterns[0][0], {name: 'Updated'});
    service.updatePattern(pattern);
    patterns = await firstValueFrom(service.patterns$);
    expect(patterns[0][0].name).toBe('Updated');
  });

});
