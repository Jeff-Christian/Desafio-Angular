import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class RegisterVehicleDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  postVehicleData(){
    return this.httpClient.post(`${API}/vehicleData`, data);
  }

}
function data(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}

