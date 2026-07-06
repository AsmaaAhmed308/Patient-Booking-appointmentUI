export interface Slot {  
    id?: number;
    scheduleId?: number;
    doctorId?: number;
    day?: string;
    time?: string;  
    isAvailable?: string;  
    docId ?: number;
    reservationDate ?:Date
    slotTime ?: string;
    slotStatus?: string 
    selectedSlot ?: boolean
  }
