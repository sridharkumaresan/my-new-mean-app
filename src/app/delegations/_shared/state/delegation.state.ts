import { fnSwimLaneReducer, SwimLaneState } from './swim-lane/reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { dashboardFeatureKey } from './dashboard';
import { DashboardState, fnDashboardReducer } from './dashboard/reducers';
import { swimLaneFeatureKey } from './swim-lane';

export const delegationModuleFeatureKey = 'delegation';

export interface DelegationModuleState {
	dashboard: Readonly<DashboardState>;
	swimLane: Readonly<SwimLaneState>;
}

export const reducerKeys = [dashboardFeatureKey, swimLaneFeatureKey];

export const delegationModuleReducers: ActionReducerMap<DelegationModuleState> = {
	dashboard: fnDashboardReducer,
	swimLane: fnSwimLaneReducer
};

export const selectDelegationModuleFeature = createFeatureSelector<DelegationModuleState>(
	delegationModuleFeatureKey
);
