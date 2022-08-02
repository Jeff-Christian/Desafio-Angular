import { UserService } from './user.service';
import { TokenService } from './token.service';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private _router: Router,
    private userService: UserService
  ) { }

  authenticate(email:any, senha:any): Observable<HttpResponse<any>>{
    return this.httpClient.post(`${API}/user/login`, {
      userName: email,
      password: senha,
    },
    { observe: 'response' }
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.userService.saveToken(authToken);
      })
    )
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

}
