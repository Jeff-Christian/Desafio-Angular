import { Router } from '@angular/router';
import { UserService } from './../authentication/user.service';
import { AuthenticationService } from './../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faUser = faUser;
  faArrowRightFromBracket = faArrowRightFromBracket;

  user$ = this.userService.returnUser();

  constructor(
    public _authService: AuthenticationService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this._authService
  }

  toggle(){
    let slide = document.querySelector(".slide");
    slide?.classList.toggle('see');
  }

  logout(){
    this.userService.logOut();
    this.router.navigate(['/login']);
  }

}
