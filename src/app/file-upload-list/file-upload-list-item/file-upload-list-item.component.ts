import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { slideInUpOnEnterAnimation, slideOutDownOnLeaveAnimation } from 'angular-animations';
import { FileUpload } from './../model/file-upload';

@Component({
  selector: 'app-file-upload-list-item',
  templateUrl: './file-upload-list-item.component.html',
  styleUrls: ['./file-upload-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
  animations: [
    slideInUpOnEnterAnimation(),
    slideOutDownOnLeaveAnimation()
  ]
})
export class FileUploadListItemComponent {
  @Output() remove: EventEmitter<FileUpload> = new EventEmitter();
  @Input() file: FileUpload;

  delete(): void {
    this.remove.emit(this.file);
  }
}
