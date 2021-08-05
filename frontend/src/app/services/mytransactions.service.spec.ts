import { TestBed } from '@angular/core/testing';

import { MytransactionsService } from './mytransactions.service';

describe('MytransactionsService', () => {
  let service: MytransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
