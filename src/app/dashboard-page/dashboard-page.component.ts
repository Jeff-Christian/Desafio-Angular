import { VehiclesData } from './dashboardData';
import { VehicleDataService } from './../services/vehicle-data.service';

import { Component, OnInit, Pipe } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicles } from '../dashboard-page/dashboard';

import { faClose, faUser } from '@fortawesome/free-solid-svg-icons';

import { debounceTime, map, filter, distinctUntilChanged, Observable } from 'rxjs';



@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})

export class DashboardPageComponent implements OnInit {

  faUser = faUser;
  faClose = faClose;

  searchValue: string = "2FRHDUYS2Y63NHD22454";
  searchControl: any;

  vehicleList: Vehicles[] = [];

  vehicleDataId1: any;

  vehicleDataMap: any = [];
  vehicleData: any;

  constructor(
    private vehicleService: VehicleService,
    private vehicleDataService: VehicleDataService,
  ) { }

  ngOnInit() {

    // Vehicle
    this.vehicleService.getVehicle().subscribe(
    (data: any) => {
      this.vehicleList = data['vehicles'];
    },
      (error) => {
      console.log(error);
      }
    );

    // Por Id
    this.vehicleDataService.getVehicleDataPorId(1).then(vehicleData => {
      this.vehicleDataId1 = vehicleData;
    }).catch(error => {
      console.error(error);
    })

    // Map
    this.vehicleDataService.getVehicleData().pipe().subscribe(
      (data:any) => {
        this.vehicleDataMap = data['vehicleData'];

        const vin = this.vehicleDataMap.map((res: any) => {
          return{
            vin: res.vin,
            odometer: res.odometer,
            fuelLevel: res.fuelLevel,
            status: res.status,
            lat: res.lat,
            long: res.long
          }
        });
        this.vehicleData = vin;
      }
    )

    // this.searchControl.valueChanges.pipe(
    //   debounceTime(1000)
    // ).subscribe(console.log);
  }

  ChangeInfo(e: any){
    console.log(e.target.value);

    if (e.target.value == 1) {
      console.log('Aqui é o Ranger falando');
      let totalVendas = document.getElementById('totalVendas');
      totalVendas!.textContent = this.vehicleList![0].volumetotal;
      let connected = document.getElementById('connected');
      connected!.textContent = this.vehicleList![0].connected;
      let updateSoftware = document.getElementById('updateSoftware');
      updateSoftware!.textContent = this.vehicleList![0].softwareUpdates;
      let image = document.getElementById('image')!.setAttribute('src', 'assets/img/ranger.png')
    } if (e.target.value == 2) {
      console.log('Aqui é o Mustang falando');
      let totalVendas = document.getElementById('totalVendas');
      totalVendas!.textContent = this.vehicleList![1].volumetotal;
      let connected = document.getElementById('connected');
      connected!.textContent = this.vehicleList![1].connected;
      let updateSoftware = document.getElementById('updateSoftware');
      updateSoftware!.textContent = this.vehicleList![1].softwareUpdates;
      let image = document.getElementById('image')!.setAttribute('src', 'assets/img/mustang.png')
    } if (e.target.value == 3) {
      console.log('Aqui é o Territory falando');
      let totalVendas = document.getElementById('totalVendas');
      totalVendas!.textContent = this.vehicleList![2].volumetotal;
      let connected = document.getElementById('connected');
      connected!.textContent = this.vehicleList![2].connected;
      let updateSoftware = document.getElementById('updateSoftware');
      updateSoftware!.textContent = this.vehicleList![2].softwareUpdates;
      let image = document.getElementById('image')!.setAttribute('src', 'assets/img/territory.png')
    } if (e.target.value == 4) {
      console.log('Aqui é o Bronco Sport falando');
      let totalVendas = document.getElementById('totalVendas');
      totalVendas!.textContent = this.vehicleList![3].volumetotal;
      let connected = document.getElementById('connected');
      connected!.textContent = this.vehicleList![3].connected;
      let updateSoftware = document.getElementById('updateSoftware');
      updateSoftware!.textContent = this.vehicleList![3].softwareUpdates;
      let image = document.getElementById('image')!.setAttribute('src', 'assets/img/broncoSport.png')
    }

  }

  press(e: any){
    if(this.searchValue == null || this.searchValue == undefined || this.searchValue.trim() == ''){
      console.log("não pode isso pô");
    } else {
      console.log(e);
    }
  }

  register(){
    const btn = document.querySelector('.message-center');
    btn?.classList.toggle('hidden');
  }

  close(){
    const btn = document.querySelector('.message-center');
    btn?.classList.add('hidden');
  }

}
