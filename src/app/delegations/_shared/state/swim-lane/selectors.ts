import { createSelector } from '@ngrx/store';
import { swimLaneFeatureKey } from '@app/delegations/_shared/state/swim-lane';
import {
	DelegationModuleState,
	selectDelegationModuleFeature
} from '@app/delegations/_shared/state/delegation.state';
import { getDelegationById, getSwimLaneViewStatus } from '@app/delegations/_shared/state/swim-lane/reducers';

export const selectSwimLane = createSelector(
	selectDelegationModuleFeature,
	(state: DelegationModuleState) => state[swimLaneFeatureKey]
);

export const selectDelegationById = createSelector(
	selectSwimLane,
	getDelegationById
);

export const selectSwimLaneViewStatus = createSelector(
  selectSwimLane,
  getSwimLaneViewStatus
);
