import { TestBed } from '@angular/core/testing';

import { AppointmentReservationService } from './appointment-reservation.service';

describe('AppointmentReservationService', () => {
  let service: AppointmentReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
