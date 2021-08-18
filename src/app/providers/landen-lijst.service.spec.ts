import { TestBed } from '@angular/core/testing';

import { LandenLijstService } from './landen-lijst.service';

describe('LandenLijstService', () => {
  let service: LandenLijstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandenLijstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
