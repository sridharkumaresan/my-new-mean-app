import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Delegation } from '@app/delegations/_shared';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent implements OnInit {

  @Input() delegation: Delegation;
  @Input() decorate: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
