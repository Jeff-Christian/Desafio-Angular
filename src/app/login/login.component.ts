import { Component, OnInit } from '@angular/core';
import { faUser, faInfoCircle, faLock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  senha = '';

  faUser = faUser;
  faInfoCircle = faInfoCircle;
  faLock = faLock;
  faEyeSlash = faEyeSlash;

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.email);
    console.log(this.senha);
  }

}
