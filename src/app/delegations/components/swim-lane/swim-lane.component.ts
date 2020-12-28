import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { actionsFromSwimLane, selectorsFromDashboard, selectorsFromSwimLane } from '@app/delegations/_shared/state';
import { Delegation, SelectedDelegations, ViewStatus } from '@app/delegations/_shared';

@Component({
  selector: 'app-swim-lane',
  templateUrl: './swim-lane.component.html',
  styleUrls: ['./swim-lane.component.scss']
})
export class SwimLaneComponent implements OnInit {

  public selectedDelegations$: Observable<SelectedDelegations>;
  public delegation$: Observable<Delegation>;
  public delegationLoading$: Observable<ViewStatus>;
  public viewStatuses = ViewStatus;

  constructor(private readonly store: Store) {
    this.getDelegation();
  }

  ngOnInit(): void {
    this.selectedDelegations$ = this.store.pipe(select(selectorsFromDashboard.selectSelectedDelegations), filter(id => !!id));
    this.selectedDelegations$.subscribe(
      (id: SelectedDelegations) => {
        this.store.dispatch(actionsFromSwimLane.loadDelegationById({id}));
      }
    );
    this.delegationLoading$ = this.store.pipe(select(selectorsFromSwimLane.selectSwimLaneViewStatus));
  }

  getDelegation() {
    this.delegation$ = this.store.pipe(select(selectorsFromSwimLane.selectDelegationById));
  }

}
