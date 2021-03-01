import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IFile } from '../model/file-upload';

@Injectable()
export class FileUploadService {
	constructor(private http: HttpClient) {}

	postDocument(formData: IFile): Observable<IFile> {
		const response = [
			{ ...formData, id: Math.random().toString(36).slice(2) },
			{ ...formData, error: 'This is a long length Error message that might me received from back end service and some front end ui validations before file upload. This could be anything. Right now I am testing this to see how a lengthy text will appear on screen.' }
		][Math.floor(Math.random() * 2)];
		return of(response).pipe(
			delay(Math.floor(Math.random() * (6000 - 999) + 999))
		);
	}

	postAttachments(): Observable<boolean> {
		return of(true);
	}
}
