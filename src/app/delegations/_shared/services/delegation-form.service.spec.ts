import { TestBed } from '@angular/core/testing';

import { DelegationFormService } from './delegation-form.service';

describe('DelegationFormService', () => {
  let service: DelegationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelegationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
