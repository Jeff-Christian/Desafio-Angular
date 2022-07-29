
import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { VehicleService } from '../services/vehicle.service';
import { Vehicles } from '../dashboard-page/dashboard';

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

  vehicleList?: Vehicles[];

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {

    this.vehicleService.getVehicle().subscribe(
    (data:any) => {
      this.vehicleList = data['vehicles'];
      console.log(this.vehicleList);
    },
      (error) => {
      console.log(error);
      }
    )

  }

  ChangeInfo(e: any){
    console.log(e.target.value);
  }

}
