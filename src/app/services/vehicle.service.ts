import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  URL = 'http://localhost:3000';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getVehicle(){
    return this.httpClient.get(`${this.URL}/vehicle`);
  }

}
