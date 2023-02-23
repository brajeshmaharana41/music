import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about/about-us/about-us.component';
import { PrivacyAndPolicyComponent } from '../about/privacy-and-policy/privacy-and-policy.component';
import { TermsAndConditionComponent } from '../about/terms-and-condition/terms-and-condition.component';
import { SearchDataComponent } from '../shared/components/search-data/search-data.component';
import { SingerListComponent } from '../shared/components/singer-list/singer-list.component';
import { ViewDataComponent } from '../shared/components/view-data/view-data.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: DashboardComponent },
      { path: 'searchData', component: SearchDataComponent },
      { path: 'viewData', component: ViewDataComponent },
      { path: 'singerlist/:listType', component: SingerListComponent },
      { path: 'profile-update', component: ProfileUpdateComponent },
<<<<<<< HEAD
      { path: 'about', component: AboutUsComponent },
      { path: 'privacy', component: PrivacyAndPolicyComponent },
      { path: 'terms', component: TermsAndConditionComponent },
=======
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'privacy',
        component: PrivacyAndPolicyComponent,
      },
      {
        path: 'terms',
        component: TermsAndConditionComponent,
      },
>>>>>>> 52585f17872642697793c1729bb2c58d073df498
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
