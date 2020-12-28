import { actionsFromDashboard } from '@app/delegations/_shared/state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-delegations',
  templateUrl: './delegations.component.html',
  styleUrls: ['./delegations.component.scss']
})
export class DelegationsComponent implements OnInit {

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(actionsFromDashboard.getDashboardType());
  }

}
