import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	OnInit,
	ViewEncapsulation
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Dashboard, ViewStatus, Delegation } from '@app/delegations/_shared';
import {
	actionsFromDashboard,
	selectorsFromDashboard
} from '@app/delegations/_shared/state';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  @HostBinding('class.dashboard-container') addHostClass: boolean = true;
	public delegations$: Observable<Dashboard[]>;
	public viewStatus$: Observable<ViewStatus>;
	public viewStatuses = ViewStatus;

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.store.dispatch(actionsFromDashboard.retrieveDashboard());
		this.delegations$ = this.store.pipe(
			select(selectorsFromDashboard.selectDelegations)
		);
		this.viewStatus$ = this.store.pipe(
			select(selectorsFromDashboard.selectDashboardViewStatus)
		);
	}

	public onDelegationSelection(delegation: Dashboard): void {
		this.store.dispatch(
			actionsFromDashboard.delegationSelected({ id: delegation.id })
		);
	}
}
