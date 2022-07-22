import { AuthenticationService } from './../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { faUser, faInfoCircle, faLock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.authenticate(this.email, this.senha).subscribe(() =>{
      this.router.navigate(['home']);
    }, (error) => {
      alert('Email ou senha inválidos');
      console.log(error);
    })
  }

}
