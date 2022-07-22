import { AuthenticationService } from './../authentication/authentication.service';
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

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.email);
    console.log(this.senha);


    this.authService.authenticate(this.email, this.senha).subscribe(() =>{
      console.log('usuário autenticado com sucesso');
    }, (error) => {
      alert('Email ou senha inválidos');
      console.log(error);
    })
  }

}
