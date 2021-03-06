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

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    let slide = document.querySelector(".slide");
    slide?.classList.toggle('see');
  }

}
