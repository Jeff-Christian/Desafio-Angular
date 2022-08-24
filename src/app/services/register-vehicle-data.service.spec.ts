import { TestBed } from '@angular/core/testing';

import { RegisterVehicleDataService } from './register-vehicle-data.service';

describe('RegisterVehicleDataService', () => {
  let service: RegisterVehicleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterVehicleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
