import { Dashboard, DashboardFilter, DashboardType } from '@app/delegations/_shared/';
import { createAction, props } from '@ngrx/store';

/** Action Types --------------------------------------------------- */

export enum DashboardActionTypes {
	LoadDashboard = '[Dashboard/Api] Load Delegations',
	LoadDashboardSuccess = '[Dashboard] Load Delegations Success',
	LoadDashboardFailure = '[Dashboard] Load Delegations Failure',

  SingleDelegationSelected = '[Dashboard] One Delegation Selected',

  GetDashboardType = '[Dashboard/Api] Get Dashboard Type',
  GetDashboardTypeSuccess = '[Dashboard] Get Dashboard Type Success',
  GetDashboardTypeFailure = '[Dashboard] Get Dashboard Type Failure',
}

export enum FilterActionType {
	FilterModified = '[Filter] Dashboard Filter Changed'
}

export enum PaginationActionType {
	ApplyPagination = '[Pagination] Dashboard Pagination Applied',
	PaginationEndReached = '[Pagination] End'
}

/** Actions -------------------------------------------------------- */

export const retrieveDashboard = createAction(
	DashboardActionTypes.LoadDashboard
);

export const retrieveDashboardSuccess = createAction(
	DashboardActionTypes.LoadDashboardSuccess,
	props<{ data: Dashboard[] }>()
);

export const retrieveDashboardFailure = createAction(
	DashboardActionTypes.LoadDashboardFailure,
	props<{ error: Error | any }>()
);

export const filterChanged = createAction(
	FilterActionType.FilterModified,
	props<{ filter: DashboardFilter }>()
);

export const delegationSelected = createAction(
	DashboardActionTypes.SingleDelegationSelected,
	props<{ id: number | string }>()
);

export const getDashboardType = createAction(
	DashboardActionTypes.GetDashboardType
);

export const getDashboardTypeSuccess = createAction(
	DashboardActionTypes.GetDashboardTypeSuccess,
	props<{ dashboardTypes: DashboardType[] }>()
);

export const getDashboardTypeFailure = createAction(
	DashboardActionTypes.GetDashboardTypeFailure,
	props<{ error: Error | any }>()
);

export const fromDashboardActions = {
	retrieveDashboard,
	retrieveDashboardSuccess,
	retrieveDashboardFailure,
  delegationSelected,
  getDashboardType,
  getDashboardTypeSuccess,
  getDashboardTypeFailure
};

export const fromFilterActions = {
	filterChanged
};
