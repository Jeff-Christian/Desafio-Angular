import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
  { path: 'dashboard', loadChildren: () => import('./dashboard-page/dashboard-page.module').then((m) => m.DashboardPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
