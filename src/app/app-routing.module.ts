import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HardwareAssetsComponent } from './components/hardware-assets/hardware-assets.component';
import { HomeComponent } from './components/home/home.component';
import { LicenceListComponent } from './components/licence-list/licence-list.component';
import { LoginComponent } from './components/login/login.component';
import { WebLicenseComponent } from './components/web-license/web-license.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    component : LoginComponent,
    path : ''
  },
  {
    component : HomeComponent,
    path : '' ,
  },
  {
    component : LicenceListComponent,
    path : 'license-list'
  },

  {
    component : WebLicenseComponent,
    path : 'web-license'
  },
  {
    component : HardwareAssetsComponent,
    path : 'hardware-assets'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
