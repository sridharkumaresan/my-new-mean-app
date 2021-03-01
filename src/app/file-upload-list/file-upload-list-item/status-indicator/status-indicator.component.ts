import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FileStatus } from '@app/file-upload-list/model/file-upload';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusIndicatorComponent implements OnInit {
  @Input() status: FileStatus;
  public statuses = FileStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
