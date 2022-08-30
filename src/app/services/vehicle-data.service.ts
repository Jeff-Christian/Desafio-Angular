import { environment } from './../../environments/environment.prod';
import { VehicleData, VehicleDataAPI, VehiclesData } from './../dashboard-page/dashboardData';
import { Observable, map, tap, pluck } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getVehicleData(valor?: string){
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient.get<VehicleDataAPI>(`${API}/vehicleData`, { params }).pipe(
      tap((valor) => console.log(valor)),
      pluck('vehicleData'),
      map((vehiclesData) =>
        vehiclesData.sort((dataA:any, dataB:any) =>
          this.orderByCode(dataA, dataB))
      )
    );
  }

  private orderByCode(dataA:VehicleData, dataB:VehicleData ){

    if(dataA.vin > dataB.vin){
      return 1;
    }

    if(dataA.vin < dataB.vin){
      return -1;
    }

    return 0;

  }

  getVehicleDataAnother(){
    return this.httpClient.get<VehiclesData[]>(`${API}/vehicleData/`).toPromise();
  }

  getVehicleDataPorId(id: number){
    return this.httpClient.get<VehiclesData>(`${API}/vehicleData/${id}`).toPromise();
  }

  getSearches(searchTerm: any):Observable<VehiclesData>{
    return this.httpClient.get<VehiclesData>(`${API}/vehicleData/`+'?q='+searchTerm);
  }


}
