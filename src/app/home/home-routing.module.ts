import { DashboardPageComponent } from './../dashboard-page/dashboard-page.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'dashboard', component: DashboardPageComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
