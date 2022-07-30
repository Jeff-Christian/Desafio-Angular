import { VehicleDataService } from './vehicle-data.service';
import { TestBed } from '@angular/core/testing';


describe('VehicleDataService', () => {
  let service: VehicleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
