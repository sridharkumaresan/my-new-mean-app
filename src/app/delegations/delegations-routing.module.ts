import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelegationsComponent } from '@delegations/delegations.component';
import { SwimLaneComponent, DashboardComponent } from '@delegations/components';

const routes: Routes = [
  {
    path: '',
    component: DelegationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelegationsRoutingModule {
}
