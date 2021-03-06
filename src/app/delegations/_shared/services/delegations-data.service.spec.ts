import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DelegationsDataService } from './delegations-data.service';

describe('DelegationsDataService', () => {
  let service: DelegationsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DelegationsDataService
      ]
    });
    service = TestBed.inject(DelegationsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
