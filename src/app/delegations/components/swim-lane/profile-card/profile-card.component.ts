import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Delegation } from '@app/delegations/_shared';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCardComponent {

  @Input() delegation: Delegation;
  @Input() decorate: boolean;

}
