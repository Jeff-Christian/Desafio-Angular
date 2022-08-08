import { DashboardPageComponent } from './../dashboard-page/dashboard-page.component';
import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }

