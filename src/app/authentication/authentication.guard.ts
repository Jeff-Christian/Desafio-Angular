import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {

  constructor(
    private userService: UserService,
    private _authServiceGuard: AuthenticationService,
    private router: Router
  ){}

  canLoad(
    _route: Route,
    _segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.userService.Islogin()){
        this.router.navigate(['/login']);
        return false;
      }

      return true;
  }
}
