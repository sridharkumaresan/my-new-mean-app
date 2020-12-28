import { selectorsFromDashboard } from '@app/delegations/_shared/state';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardType } from '@app/delegations/_shared';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
  public toggleSwitchData$: Observable<DashboardType[]> = new Observable();

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.toggleSwitchData$ = this.store.pipe(select(selectorsFromDashboard.selectDashboardType));
  }

}
