import { VehiclesData } from './../../dashboard-page/dashboardData';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(VehiclesData: VehiclesData[], searchValue: string): VehiclesData[] {

    if (!VehiclesData || !searchValue) {
      return VehiclesData;
    }

    return VehiclesData.filter(vehicleData => vehicleData.vin.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    // // || vehicleData.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    // // vehicleData.odometer.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    // // vehicleData.tirePressure.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    // // vehicleData.status.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    // // vehicleData.batteryStatus.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    // // vehicleData.fuelLevel.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    // // vehicleData.lat.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
    // // vehicleData.long.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

  }

}
