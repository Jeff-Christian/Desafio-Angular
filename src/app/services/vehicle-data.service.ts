import { environment } from './../../environments/environment.prod';
import { VehiclesData } from './../dashboard-page/dashboardData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getVehicleData(){
    return this.httpClient.get(`${API}/vehicleData`);
  }

  getVehicleDataAnother(){
    return this.httpClient.get<VehiclesData[]>(`${API}/vehicleData/`).toPromise();
  }

  getVehicleDataPorId(id: number){
    return this.httpClient.get<VehiclesData>(`${API}/vehicleData/${id}`).toPromise();
  }


}
