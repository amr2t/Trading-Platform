import { TestBed } from '@angular/core/testing';

import { SlService } from './sl.service';

describe('SlService', () => {
  let service: SlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
