import { patient } from './patient.model'; 
import { slots } from './slots.model'; 
export interface reservationData{
    patientData : patient
    selectedSlots : slots
}