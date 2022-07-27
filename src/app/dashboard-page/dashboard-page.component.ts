
import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { VehicleService } from '../services/vehicle.service';

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

  vehicle: any;

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {

    this.vehicleService.getVehicle().subscribe(
      (data) => {
        this.vehicle = data;
        console.log(this.vehicle[1]);
      },
      (error) => {
        console.log(error);

      }
    )

  }

  showData(){
    console.log(this.vehicle);
  }


}
