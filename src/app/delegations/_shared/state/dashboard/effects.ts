import { Injectable } from '@angular/core';
import { Service as DataService, Dashboard, DashboardType } from '@app/delegations/_shared';
import { fromDashboardActions } from '@app/delegations/_shared/state/dashboard/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class DashboardEffects {
	constructor(
		private action$: Actions,
		private readonly delegationService: DataService.DelegationsDataService
	) {}

	loadDashboard$ = createEffect(() =>
		this.action$.pipe(
			ofType(fromDashboardActions.retrieveDashboard),
			exhaustMap(action =>
				this.delegationService.getDelegations().pipe(
					map((data: Dashboard[]) =>
						fromDashboardActions.retrieveDashboardSuccess({ data })
					),
					catchError((error: any) =>
						of(fromDashboardActions.retrieveDashboardFailure(error))
					)
				)
			)
		)
  );

  getDashboardType$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromDashboardActions.getDashboardType),
      mergeMap(action => this.delegationService.getDashboardType().pipe(
        map((dashboardTypes: DashboardType[]) => {
          return fromDashboardActions.getDashboardTypeSuccess({ dashboardTypes });
        }),
        catchError((error: any) => of(fromDashboardActions.getDashboardTypeFailure(error)))
      ))
    )
  );
}
