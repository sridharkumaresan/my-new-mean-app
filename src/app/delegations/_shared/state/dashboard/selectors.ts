import { createSelector } from '@ngrx/store';
import {
	DelegationModuleState,
	selectDelegationModuleFeature
} from '@app/delegations/_shared/state/delegation.state';
import {
	getDelegations,
	getFilter,
  getDashboardViewStatus,
  getSelectedDelegations,
  getDashboardTypes,
  getSelectedDashboardType

} from '@app/delegations/_shared/state/dashboard/reducers';
import { dashboardFeatureKey } from '@app/delegations/_shared/state/dashboard';

export const selectDashboard = createSelector(
	selectDelegationModuleFeature,
	(state: DelegationModuleState) => state[dashboardFeatureKey]
);

export const selectDelegations = createSelector(
	selectDashboard,
	getDelegations
);

export const selectFilter = createSelector(selectDashboard, getFilter);

export const selectDashboardViewStatus = createSelector(
	selectDashboard,
	getDashboardViewStatus
);

export const selectSelectedDelegations = createSelector(selectDashboard, getSelectedDelegations);

export const selectDashboardType = createSelector(selectDashboard, getDashboardTypes);

export const selectSelectedDashboardType = createSelector(selectDashboard, getSelectedDashboardType);
