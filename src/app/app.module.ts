import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,

} from '@abacritt/angularx-social-login';
import { LoginComponent } from './components/login/login.component';
import { LicenceListComponent } from './components/licence-list/licence-list.component';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HeadersComponent } from './components/headers/headers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WebLicenseComponent } from './components/web-license/web-license.component';
import { HardwareAssetsComponent } from './components/hardware-assets/hardware-assets.component';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './components/home/home.component';
import { MitsLicenseComponent } from './components/modals/mits-license/mits-license.component';
import {MatDialogModule} from '@angular/material/dialog';
import {  MatInputModule } from '@angular/material/input'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LicenceListComponent,
    HeadersComponent,
    NavbarComponent,
    WebLicenseComponent,
    HardwareAssetsComponent,
    HomeComponent,
    MitsLicenseComponent
  ],
  entryComponents: [
    MitsLicenseComponent
  ] ,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    SocialLoginModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    FlexLayoutModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule


  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '165949906227-udsb9t1nke4eogu2spu24gl2q3dff7hg.apps.googleusercontent.com'
            )

          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
