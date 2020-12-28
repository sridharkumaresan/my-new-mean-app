import { createReducer, on, Action } from '@ngrx/store';
import {
	ViewStatus,
	Dashboard,
	DashboardFilter,
	SelectedDelegations,
  DashboardType
} from '@app/delegations/_shared';
import {
	fromDashboardActions,
	fromFilterActions
} from '@app/delegations/_shared/state/dashboard/actions';
import { state } from '@angular/animations';

/** Delegation State ----------------------------------------------- */

export interface DashboardState {
	delegations: Dashboard[];
	viewStatus: ViewStatus;
	error?: Error | any;
  filter: DashboardFilter | null;
  dashboardTypes: DashboardType[]; // This is a temp setup - this will be hanlded on filter later
	selectedDelegations: SelectedDelegations;
}

export const initialState: Readonly<DashboardState> = {
	delegations: [],
	viewStatus: ViewStatus.Initial,
	error: null,
	filter: new DashboardFilter().getDefaultFilter(),
  selectedDelegations: null,
  dashboardTypes: []
};

/** Delegation Reducers -------------------------------------------- */

export const dashboardReducer = createReducer(
	initialState,
	on(fromDashboardActions.retrieveDashboard, state => ({
		...state,
		viewStatus: ViewStatus.Loading
	})),
	on(fromDashboardActions.retrieveDashboardSuccess, (state, { data }) => ({
		...state,
		viewStatus: ViewStatus.Success,
		delegations: [...state.delegations, ...data]
	})),
	on(fromDashboardActions.retrieveDashboardFailure, state => ({
		...state,
		viewStatus: ViewStatus.Failure
	})),
	on(fromFilterActions.filterChanged, (state, { filter }) => ({
		...state,
		filter
	})),
	on(fromDashboardActions.delegationSelected, (state, { id }) => ({
		...state,
		selectedDelegations: id
  })),
  on(fromDashboardActions.getDashboardTypeSuccess, (state, { dashboardTypes }) => ({
    ...state,
    dashboardTypes
  }))
);

export function fnDashboardReducer(
	state: DashboardState | undefined,
	action: Action
) {
	return dashboardReducer(state, action);
}

/** State Slices --------------------------------------------------- */

export const getDelegations = (state: DashboardState) => state.delegations;
export const getFilter = (state: DashboardState) => state.filter;
export const getDashboardViewStatus = (state: DashboardState) =>
	state.viewStatus;
export const getSelectedDelegations = (state: DashboardState) =>
	state.selectedDelegations;
export const getDashboardTypes = (state: DashboardState) => state.dashboardTypes;
export const getSelectedDashboardType = (state:DashboardState) => state.dashboardTypes.find(d => !!d.selected)?.name as string;
