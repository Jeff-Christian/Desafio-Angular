import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicles } from '../dashboard-page/dashboard';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(url: string){
    return this.httpClient.get(url);
  }

  getVehicle():Observable<any[]>{
    return this.httpClient.get<Vehicles[]>(`${API}/vehicle`);
  }

}
