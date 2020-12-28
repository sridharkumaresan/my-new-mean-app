import { InjectionToken } from '@angular/core';

export interface StatusColors {
	name: string;
	properties: any;
}
export const STATUS = new InjectionToken('STATUS');
