import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Component, HostListener, OnInit } from '@angular/core';
import { actionsFromSwimLane, selectorsFromDashboard, selectorsFromSwimLane } from '@app/delegations/_shared/state';
import { Delegation, SelectedDelegations, ViewStatus } from '@app/delegations/_shared';
import { FormGroup } from '@angular/forms';
import { DelegationFormService } from '@app/delegations/_shared/services';

@Component({
  selector: 'app-swim-lane',
  templateUrl: './swim-lane.component.html',
  styleUrls: ['./swim-lane.component.scss']
})
export class SwimLaneComponent implements OnInit {

  @HostListener('mouseenter', ['$event']) onEnter( e: MouseEvent ) {
    this.decorate = true;
  }

  @HostListener('mouseleave', ['$event']) onLeave( e: MouseEvent ) {
    this.decorate = false;
  }

  public selectedDelegations$: Observable<SelectedDelegations>;
  public delegation$: Observable<Delegation>;
  public delegationLoading$: Observable<ViewStatus>;
  public viewStatuses = ViewStatus;
  public decorate: boolean;
  public delegationForm: FormGroup;

  constructor(private readonly store: Store, private readonly formService: DelegationFormService) {
    this.getDelegation();
    // Initialize new fg instance
    this.delegationForm = this.formService.createDelegationForm(new FormGroup({}));
    this.delegationForm.valueChanges.subscribe(
      d => console.log('Changes in main comp ', d)
    );
  }

  ngOnInit(): void {
    this.selectedDelegations$ = this.store.pipe(select(selectorsFromDashboard.selectSelectedDelegations), filter(id => !!id));
    this.selectedDelegations$.subscribe(
      (id: SelectedDelegations) => {
        this.store.dispatch(actionsFromSwimLane.loadDelegationById({id}));
      }
    );
    this.delegationLoading$ = this.store.pipe(select(selectorsFromSwimLane.selectSwimLaneViewStatus));
  }

  getDelegation() {
    this.delegation$ = this.store.pipe(select(selectorsFromSwimLane.selectDelegationById));
  }

}
