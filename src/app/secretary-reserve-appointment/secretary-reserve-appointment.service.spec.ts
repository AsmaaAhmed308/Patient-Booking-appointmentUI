import { TestBed } from '@angular/core/testing';

import { SecretaryReserveAppointmentService } from './secretary-reserve-appointment.service';

describe('SecretaryReserveAppointmentService', () => {
  let service: SecretaryReserveAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretaryReserveAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
