import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DelegationFormService } from './delegation-form.service';

describe('DelegationFormService', () => {
  let service: DelegationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        DelegationFormService
      ]
    });
    service = TestBed.inject(DelegationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
