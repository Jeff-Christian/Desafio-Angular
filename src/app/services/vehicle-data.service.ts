import { VehiclesData } from './../dashboard-page/dashboardData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

  URL = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient
  ) { }

  getVehicleData():Observable<any[]>{

    return this.httpClient.get<VehiclesData[]>(`${this.URL}/vehicleData`);

  }


}
