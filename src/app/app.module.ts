import { LOCALE_ID, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { UserMainComponent as UserMainComponent } from './user/user-main/user-main.component';
import { MatDividerModule } from '@angular/material/divider';
import { PopUpUserComponent } from './user/pop-up-user/pop-up-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpPasswordComponent } from './user/pop-up-password/pop-up-password.component';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user/user-form/user-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CompanyMainComponent as CompanyMainComponent } from './company/company-main/company-main.component';
import { InfoCompanyComponent } from './company/info-company/info-company.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InfoSubscriptionComponent } from './company/info-subscription/info-subscription.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { ManageUserComponent } from './company/manage-user/manage-user.component';
import { MatSortModule } from '@angular/material/sort';
import { PopCompanyNameComponent } from './company/pop-company-name/pop-company-name.component';

@NgModule({
  declarations: [
    AppComponent,
    UserMainComponent,
    PopUpUserComponent,
    PopUpPasswordComponent,
    UserFormComponent,
    LandingPageComponent,
    CompanyMainComponent,
    InfoCompanyComponent,
    InfoSubscriptionComponent,
    ManageUserComponent,
    PopCompanyNameComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  entryComponents: [PopUpUserComponent, PopUpPasswordComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
