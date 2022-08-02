import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {

  constructor(
    private _authServiceGuard: AuthenticationService,
    private router: Router
  ){}

  canLoad(
    _route: Route,
    _segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this._authServiceGuard.authenticate(email, senha)){
        this.router.navigate(['/login']);
        return false;
      }

      return true;
  }
}

function email(_email: any, _senha: any) {
  throw new Error('Function not implemented.');
}

function senha(_email: (email: any, senha: any) => void, _senha: any) {
  throw new Error('Function not implemented.');
}

