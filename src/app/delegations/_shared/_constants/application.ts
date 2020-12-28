import { StatusColors } from '@delegations/_shared/_interfaces';

export enum ViewStatus {
	Initial = 'INITIAL',
	Loading = 'LOADING',
	Success = 'SUCCESS',
	Failure = 'FAILURE'
}

export const statusColors: StatusColors[] = [
	{
		name: 'feature',
		properties: {
			'--backgroundC': '#1F2125',
      '--textC': '#2F90FF',
      '--basicC': 'green'
		}
  },
  {
		name: 'cancelled',
		properties: {
			'--backgroundC': '#1F2125',
      '--textC': '#2F90FF',
      '--basicC': 'red'
		}
  },
  {
		name: 'current',
		properties: {
			'--backgroundC': '#1F2125',
      '--textC': '#2F90FF',
      '--basicC': 'amber'
		}
	}
];
