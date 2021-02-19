import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class DelegationFormService {

  constructor(private formBuilder: FormBuilder) { }

  public createDelegationForm = (delegationForm: FormGroup): FormGroup => {
    delegationForm = this.formBuilder.group({
      dates: this.formBuilder.group({
        start: [],
        end: []
      })
    });
    return delegationForm;
  }
}
