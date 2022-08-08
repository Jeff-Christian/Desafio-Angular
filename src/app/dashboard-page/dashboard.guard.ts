import { UserService } from './../authentication/user.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanLoad {

  constructor(
    private UserService: UserService,
    private Router: Router
  ){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.UserService.Islogin()){
      this.Router.navigate(['home']);
      return false;
    }

    return true;
  }
}
