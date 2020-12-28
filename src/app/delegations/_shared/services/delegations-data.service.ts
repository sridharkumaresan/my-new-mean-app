import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashboardType, SelectedDelegations, Delegation } from '@app/delegations/_shared';

@Injectable()
export class DelegationsDataService {

  constructor(private readonly http: HttpClient) { }

  public getDelegations(type: string = 'delegators') {
    const url = `${environment.apiUrl}/${type}/delegations`;
    return this.http.get<any[]>(url).pipe(delay(2000));
  }

  public getDashboardType(): Observable<DashboardType[]> {
    const url = `${environment.apiUrl}/delegationType`;
    return this.http.get<DashboardType[]>(url);
  }

  public getDelegation(id: SelectedDelegations, type: string = 'delegators') {
    const url = `${environment.apiUrl}/${type}/delegations/${id}`;
    return this.http.get<Delegation>(url).pipe(delay(800));
  }
}
