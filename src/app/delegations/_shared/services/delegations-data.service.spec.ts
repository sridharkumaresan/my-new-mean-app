import { TestBed } from '@angular/core/testing';

import { DelegationsDataService } from './delegations-data.service';

describe('DelegationsDataService', () => {
  let service: DelegationsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelegationsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
