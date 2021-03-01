import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadListRoutingModule } from './file-upload-list-routing.module';
import { FileUploadListComponent } from './file-upload-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material/material.module';
import { FileUploadListItemComponent } from './file-upload-list-item/file-upload-list-item.component';
import { FileUploadService } from './services/file-upload.service';
import { StatusIndicatorComponent } from './file-upload-list-item/status-indicator/status-indicator.component';


@NgModule({
  declarations: [FileUploadListComponent, FileUploadListItemComponent, StatusIndicatorComponent],
  imports: [
    CommonModule,
    FileUploadListRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    FileUploadService
  ]
})
export class FileUploadListModule { }
