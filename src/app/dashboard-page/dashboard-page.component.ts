import { RegisterVehicleDataService } from './../services/register-vehicle-data.service';
import { VehicleDataService } from './../services/vehicle-data.service';

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Pipe, ViewChild } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { Vehicles } from '../dashboard-page/dashboard';

import { faClose, faUser } from '@fortawesome/free-solid-svg-icons';

import { debounceTime, map, filter, distinctUntilChanged, Observable, fromEvent, concatMap, switchMap, Subscription, tap, merge } from 'rxjs';
import { VehiclesData, VehicleDataAPI } from './dashboardData';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})

export class DashboardPageComponent implements OnInit{

  faUser = faUser;
  faClose = faClose;

  searchInput = new FormControl();

  allDatas$ = this.vehicleDataService.getVehicleData().pipe();

  filterInput$ = this.searchInput.valueChanges.pipe(
    debounceTime(300),
    filter((valorDigitado) => valorDigitado.length >= 5 || !valorDigitado.length),
    distinctUntilChanged(),
    switchMap((valorDigitado) =>
      this.vehicleDataService.getVehicleData(valorDigitado)
    ),
  );

  vehicleData$ = merge(
    this.allDatas$,
    this.filterInput$
  );

  searchValue: any = "2FRHDUYS2Y63NHD22454";
  searchControl: any;

  searchResults!: VehiclesData;

  vehicleList: Vehicles[] = [];

  vehicleData: any;

  constructor(
    private vehicleService: VehicleService,
    private vehicleDataService: VehicleDataService,
    private RegisterVehicleDataService: RegisterVehicleDataService,
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

  onRegister(data: any){
    // this.HttpClient.post("http://localhost:3000/vehicleData", data).subscribe((res) =>{
    //   console.warn("result", res);
    // })
    console.warn(data)
  }

}
