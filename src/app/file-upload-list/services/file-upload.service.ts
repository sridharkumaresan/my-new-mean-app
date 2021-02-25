import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IFile } from '../model/file-upload';

@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) { }

  postDocument(formData: IFile): Observable<IFile> {
    return of({...formData, id: Math.random().toString(36).slice(2)}).pipe(delay(Math.floor(Math.random() * (6000 - 999) + 999)));
  }

  postAttachments(): Observable<boolean> {
    return of(true);
  }

}
