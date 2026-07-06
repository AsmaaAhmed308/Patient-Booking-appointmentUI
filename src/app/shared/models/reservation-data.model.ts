import { Patient } from './patient.model'; 
import { Slot } from './slot.model'; 
export interface ReservationData{
    patientData : Patient
    selectedSlots : Slot
}
