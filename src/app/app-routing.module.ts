import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyMainComponent } from './company/company-main/company-main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserMainComponent } from './user/user-main/user-main.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'user-account', component: UserMainComponent },
  { path: 'company-account', component: CompanyMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
