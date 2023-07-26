import { TestBed } from '@angular/core/testing';
import { BackService } from './sl.service';

describe('BackService', () => {
  let service: BackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
