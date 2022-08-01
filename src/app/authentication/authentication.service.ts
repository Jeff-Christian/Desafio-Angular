import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private _router: Router,
  ) { }

  authenticate(email:string, senha:string): Observable<any>{
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: email,
      password: senha,
    })
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

}
