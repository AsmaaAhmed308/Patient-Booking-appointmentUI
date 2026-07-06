export interface Appointment {
    appointmentId: number;
    patientId: number;
    doctorId: number;
    appointmentDate: Date;
    startTime: any;
    duration: number;
    patientName: string;
    birthDate: Date;
    contactInfo: string;
    gender: string;
    regDate?: Date;
    docName: string;
    specialty:string;
    clinicName :string

}
