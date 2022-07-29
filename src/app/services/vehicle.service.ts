import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicles } from '../dashboard-page/dashboard';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  URL = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient
  ) { }

  getVehicle():Observable<any[]>{
    return this.httpClient.get<Vehicles[]>(`${this.URL}/vehicle`);
  }

}
