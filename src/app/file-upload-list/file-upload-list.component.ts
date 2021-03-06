import { Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { fadeInDownOnEnterAnimation, slideOutLeftOnLeaveAnimation } from 'angular-animations';
import { BehaviorSubject } from 'rxjs';
import { FileStatus, FileUpload, IFile } from './model/file-upload';
import { FileUploadService } from './services/file-upload.service';

@Component({
	selector: 'app-file-upload-list',
	templateUrl: './file-upload-list.component.html',
	styleUrls: ['./file-upload-list.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInDownOnEnterAnimation({anchor: 'enter', duration: 400}),
    slideOutLeftOnLeaveAnimation({anchor: 'leave', duration: 300})]
})
export class FileUploadListComponent {
	@ViewChild('fileInput', { static: false }) fileInput: ElementRef;
	public files: FileUpload[] = [];
  public files$: BehaviorSubject<FileUpload[]> = new BehaviorSubject(null);
	constructor(private uploadService: FileUploadService) {}

	public remove(file: FileUpload): void {
    this.files = this.files.filter(
      f => f.arrayIdentifier !== file.arrayIdentifier
    )
    this.files$.next(this.files);
	}

	private postDocument(file: IFile): void {
		const formData = new FormData();
		formData.append('file', file.data);
    const _file = {...file, data: formData}
    this.uploadService.postDocument(_file).subscribe((response: IFile) => {
      this.updateFileStatus(response);
    });
	}

  public onAttach(): void {
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {
      for (const file of fileInput.files) {
        this.files.push(new FileUpload(file));
      }
      this.files$.next(this.files);
      this.upload();
    };
    fileInput.click();
  }

  public trackById(index: number, file: FileUpload): string {
    return file.arrayIdentifier;
  }

  public submit(): void {
    console.log('Files to be Uploaded', this.files.filter(f => f.status === FileStatus.Done));
  }

  private upload(): void {
		this.fileInput.nativeElement.value = '';
    const filteredFiles = this.files.filter(file => file.status===FileStatus.Initial || file.status===FileStatus.Uploading);
		filteredFiles.forEach(file => this.postDocument(file));
	}

  private updateFileStatus(response: IFile): void {
    this.files = this.files.map((file: FileUpload) => {
      return (file.arrayIdentifier === response.arrayIdentifier)
        ? file.setStatus(response)
        : file as FileUpload;
    });
    this.files$.next(this.files);
  }
}
