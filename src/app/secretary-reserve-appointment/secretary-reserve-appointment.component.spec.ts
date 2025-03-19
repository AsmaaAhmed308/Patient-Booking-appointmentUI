import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryReserveAppointmentComponent } from './secretary-reserve-appointment.component';

describe('SecretaryReserveAppointmentComponent', () => {
  let component: SecretaryReserveAppointmentComponent;
  let fixture: ComponentFixture<SecretaryReserveAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecretaryReserveAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretaryReserveAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
