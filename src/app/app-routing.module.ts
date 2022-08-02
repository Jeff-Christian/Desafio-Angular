import { AuthenticationGuard } from './authentication/authentication.guard';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login', canLoad: [AuthenticationGuard]},
  {path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), canLoad: [AuthenticationGuard]},
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
