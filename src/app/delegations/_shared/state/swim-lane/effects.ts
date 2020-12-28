import { Injectable } from '@angular/core';
import { Service as DataService, Delegation } from '@app/delegations/_shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { fromSwimLaneActions } from '@app/delegations/_shared/state/swim-lane/actions';
import { select, Store } from '@ngrx/store';
import { selectSelectedDashboardType } from './../dashboard/selectors';

@Injectable()
export class SwimLandEffects {
	constructor(
    private store: Store,
		private action$: Actions,
		private readonly delegationService: DataService.DelegationsDataService
	) {}

	loadDelegation$ = createEffect(() =>
		this.action$.pipe(
      ofType(fromSwimLaneActions.loadDelegationById),
      filter(action => !!action.id),
      withLatestFrom(this.store.pipe(select(selectSelectedDashboardType))),
      mergeMap(([action, type]) => this.delegationService.getDelegation(action.id, type).pipe(
        map((delegation: Delegation) =>
          {console.log('Delegation Retrieved ', delegation);
          return fromSwimLaneActions.loadDelegationByIdSuccess({ delegation })}
        ),
        catchError((error: any) =>
          of(fromSwimLaneActions.loadDelegationByIdFailure(error))
        )
      ))
		)
  );
}
