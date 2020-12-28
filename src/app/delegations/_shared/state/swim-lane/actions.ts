import { Delegation, SelectedDelegations } from '@app/delegations/_shared';
import { createAction, props } from '@ngrx/store';
/** Action Types --------------------------------------------------- */

export enum SwimLaneActionType {
	DefaultSwimLane = '[SwimLane - Default] Default Page',

	SwitchToEditMode = '[SwimLane - Delegation] Turn On Edit Mode',

	LoadDelegation = '[SwimLane - Delegation/Api] Load Delegation',
	LoadDelegationSuccess = '[SwimLane - Delegation] Load Delegation Success',
	LoadDelegationFailure = '[SwimLane - Delegation] Load Delegation Failure',

	UpdateDelegation = '[SwimLane - Delegation/Api] Update Delegation',
	UpdateDelegationSuccess = '[SwimLane - Delegation] Update Delegation Success',
	UpdateDelegationFailure = '[SwimLane - Delegation] Update Delegation Failure',

	CancelDelegation = '[SwimLane - Delegation/Api] Cancel Delegation',
	CancelDelegationSuccess = '[SwimLane - Delegation] Cancel Delegation Success',
	CancelDelegationFailure = '[SwimLane - Delegation] Cancel Delegation Failure'
}

/** Actions -------------------------------------------------------- */

export const showDefaultSwimLane = createAction(
	SwimLaneActionType.DefaultSwimLane
);
export const switchToEditMode = createAction(
	SwimLaneActionType.SwitchToEditMode
);

export const loadDelegationById = createAction(
	SwimLaneActionType.LoadDelegation,
	props<{ id: SelectedDelegations }>()
);

export const loadDelegationByIdSuccess = createAction(
	SwimLaneActionType.LoadDelegationSuccess,
	props<{ delegation: Delegation }>()
);

export const loadDelegationByIdFailure = createAction(
	SwimLaneActionType.LoadDelegationFailure,
	props<{ error: Error | any }>()
);

export const fromSwimLaneActions = {
	showDefaultSwimLane,
	switchToEditMode,
	loadDelegationById,
	loadDelegationByIdSuccess,
	loadDelegationByIdFailure
};
