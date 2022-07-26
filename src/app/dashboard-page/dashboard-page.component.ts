import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  volumetotal = '';
  connected = '';
  softwareUpdates = '';

  odometer = '';
  tirePressure = '';
  status = '';
  batteryStatus = '';
  fuelLevel = '';
  lat = '';
  long = '';

  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
