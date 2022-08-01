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

  constructor(
    public _authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this._authService
  }

  toggle(){
    let slide = document.querySelector(".slide");
    slide?.classList.toggle('see');
  }

}
