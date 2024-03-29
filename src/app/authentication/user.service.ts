import { User } from './user';
import { TokenService } from './token.service';
import jwt_decode from 'jwt-decode'
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({});

  constructor(
    private tokenService: TokenService
  ) {
    if(this.tokenService.hasToken()){
      this.decodificaJWT();
    }
  }

  private decodificaJWT(){
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  returnUser(){
    return this.userSubject.asObservable();
  }

  saveToken(token: string){
    this.tokenService.saveToken(token);
    this.decodificaJWT();
  }

  logOut(){
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  Islogin(){
    return this.tokenService.hasToken();
  }

}
