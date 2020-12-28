import { MaterialModule } from '@app/material/material.module';
import { FilterComponent } from './filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeToggleSwitchComponent } from './type-toggle-switch/type-toggle-switch.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { SortMenuComponent } from './sort-menu/sort-menu.component';



@NgModule({
  declarations: [FilterComponent, TypeToggleSwitchComponent, FilterMenuComponent, SortMenuComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FilterComponent]
})
export class FilterModule { }
