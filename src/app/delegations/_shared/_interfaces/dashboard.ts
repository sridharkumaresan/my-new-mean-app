import { DashboardTypes, Status, Task } from '@app/delegations/_shared';

export class Dashboard {
	id!: number;
	createdAt!: string;
	status!: Status;
	delegatorName?: string;
	delegateeName?: string;
	tasks!: Task[];
	picture!: string;
}

export interface Pagination {
	_page: number;
	_limit: number;
}

export interface Sorting {
	_sort: string;
	_order: 'desc' | 'asc' | '';
}

export class DashboardFilter {
	pagination: Pagination = {
		_limit: 10,
		_page: 1
	};
	sorting: Sorting = {
		_order: 'asc',
		_sort: ''
	};
	type!: DashboardTypes | null;
	searchText!: string;
	dateRange: {
		startDate: string;
		endDate: string;
	} = {
		startDate: '',
		endDate: ''
	};
	public getDefaultFilter() {
		this.pagination._limit = 10;
		this.pagination._page = 1;
		this.sorting._order = 'asc';
		this.sorting._sort = '';
		this.type = null;
		this.searchText = '';
		this.dateRange.endDate = '';
		this.dateRange.startDate = '';
		return this;
	}
}

export interface DashboardType {
	id: string;
	name: DashboardTypes;
	displayValue: string;
	selected: boolean;
}

export type SelectedDelegations = number | string | number[] | string[] | null;
