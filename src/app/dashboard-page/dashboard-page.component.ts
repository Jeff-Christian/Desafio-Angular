import { VehiclesData } from './dashboardData';
import { VehicleDataService } from './../services/vehicle-data.service';

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

  faUser = faUser;
  searchValue: string = "2FRHDUYS2Y63NHD22454";

  vehicleList: Vehicles[] = [];
  vehicleDataList: VehiclesData[] = [];

  vehicleDataId1: any;

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

    // VehicleData

    // this.vehicleDataService.getVehicleDataAnother().then(vehicleData => {
    //     console.log(vehicleData);
    //   }).catch(error => {
    //     console.error(error);
    //   })

    // Por Id
    this.vehicleDataService.getVehicleDataPorId(1).then(vehicleData => {
      this.vehicleDataId1 = vehicleData;
      console.log(this.vehicleDataId1);

    }).catch(error => {
      console.error(error);
    })


    this.vehicleDataService.getVehicleData().subscribe(
      (data:any) => {
        this.vehicleDataList = data['vehicleData'];
        console.log(this.vehicleDataList);
      },
      (error) => {
        console.log(error);
      }
    )

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

}
