import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardType } from '@app/delegations/_shared';

@Component({
  selector: 'app-type-toggle-switch',
  templateUrl: './type-toggle-switch.component.html',
  styleUrls: ['./type-toggle-switch.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeToggleSwitchComponent implements OnInit {
  private _data: DashboardType[] = [];
  @Input()
  set data(input: DashboardType[]) {
    if (input) {
      this._data = input;
      // setTimeout(()=>{
        const toggleName = input.find(d => !!d.selected)?.name as string;
        console.log('First Toggle ', toggleName);
        this.onToggle(toggleName);
      // },0);

    }
  }
  get data() { return this._data;}

  public selectedValue: any;
  constructor() { }

  ngOnInit(): void {
  }
  onToggle(toggledValue: string) {
    console.log('Toggled ', toggledValue);
    this.selectedValue = toggledValue;
  }

}
