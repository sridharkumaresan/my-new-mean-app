import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'delegations',
    loadChildren: () => import('./delegations/delegations.module').then(m => m.DelegationsModule)
  },
  {
    path: 'file-upload',
    loadChildren: () => import('./file-upload-list/file-upload-list.module').then(m => m.FileUploadListModule)
  },
  {
    path: '',
    redirectTo: 'delegations',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
