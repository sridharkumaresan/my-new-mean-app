import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DelegationsRoutingModule } from '@delegations/delegations-routing.module';
import { DelegationsComponent } from '@delegations/delegations.component';
import { MaterialModule } from '@app/material/material.module';
import { SwimLaneComponent, DashboardComponent } from '@delegations/components';
import { DelegationsDataService, StylingService, DelegationFormService } from '@app/delegations/_shared/services';
import { FilterModule } from '@app/delegations/components/filter/filter.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { StoreModule } from '@ngrx/store';
import { delegationModuleFeatureKey, delegationModuleReducers } from '@app/delegations/_shared/state/delegation.state';
import { effectsFromDashboard, effectsFromSwimLane } from '@app/delegations/_shared/state';
import { EffectsModule } from '@ngrx/effects';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { DatesComponent } from './components/swim-lane/dates/dates.component';
import { ProfileCardComponent } from './components/swim-lane/profile-card/profile-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [DelegationsComponent, DashboardComponent, SwimLaneComponent, DatesComponent, ProfileCardComponent],
  imports: [
    CommonModule,
    DelegationsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FilterModule,
    PerfectScrollbarModule,
    StoreModule.forFeature(delegationModuleFeatureKey, delegationModuleReducers),
    EffectsModule.forFeature([effectsFromDashboard.DashboardEffects, effectsFromSwimLane.SwimLandEffects])
  ],
  providers: [
    DelegationsDataService,
    DelegationFormService,
    StylingService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: { disabled: true }
    }
  ]
})
export class DelegationsModule { }
