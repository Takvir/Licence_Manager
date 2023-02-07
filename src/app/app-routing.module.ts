import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenceListComponent } from './components/licence-list/licence-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    component : LicenceListComponent,
    path : 'list'
  },
  {
    component : LoginComponent,
    path : 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
