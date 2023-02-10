import { TestBed } from '@angular/core/testing';

import { SnabService } from './snab.service';

describe('SnabService', () => {
  let service: SnabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
