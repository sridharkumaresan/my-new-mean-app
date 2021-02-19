import { ControlContainer, FormGroup } from '@angular/forms';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss'],
  host: {'class': 'dates-container'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatesComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  public datesFormGroup: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.datesFormGroup = this.controlContainer.control as FormGroup;
    this.datesFormGroup.valueChanges.subscribe(
      d => console.log('Dates Form Group ', d)
    );
  }

}
