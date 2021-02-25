import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadListComponent } from './file-upload-list.component';

const routes: Routes = [
  {
    path: '',
    component: FileUploadListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileUploadListRoutingModule { }
