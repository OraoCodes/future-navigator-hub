
export enum BookingStatus {
  Upcoming = "upcoming",
  Completed = "completed",
  Cancelled = "cancelled"
}

export interface Booking {
  id: string;
  title: string;
  start: Date;
  end: Date;
  clientName: string;
  clientEmail: string;
  serviceType: string;
  status: BookingStatus;
  notes?: string;
  paymentStatus: string;
  paymentAmount: number;
}
