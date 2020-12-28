import { createReducer, on, Action } from '@ngrx/store';
import { Delegation, Mode, ViewStatus } from '@app/delegations/_shared';
import { fromSwimLaneActions } from '@app/delegations/_shared/state/swim-lane/actions';
/** Delegation State */
export interface SwimLaneState {
	delegation: Delegation;
	mode: Mode;
	viewStatus: ViewStatus;
}

export const initialState: Readonly<SwimLaneState> = {
	delegation: null,
	mode: Mode.Empty,
	viewStatus: ViewStatus.Initial
};

export const swimLaneReducer = createReducer(
	initialState,
	on(fromSwimLaneActions.loadDelegationById, state => {
    console.log('!!!!! Load delegationById ', state);
    return {
		  ...state,
      viewStatus: ViewStatus.Loading
    }
	}),
	on(fromSwimLaneActions.loadDelegationByIdSuccess, (state, { delegation }) => {
		console.log('Delegation retrieved ', state);
		return { ...state, delegation, viewStatus: ViewStatus.Success };
	})
);

export function fnSwimLaneReducer(
	state: SwimLaneState | undefined,
	action: Action
) {
	return swimLaneReducer(state, action);
}

export const getDelegationById = (state: SwimLaneState) => state.delegation;
export const getSwimLaneViewStatus = (state: SwimLaneState) => state.viewStatus;
