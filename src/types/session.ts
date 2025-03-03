
export enum SessionStatus {
  Upcoming = "upcoming",
  InProgress = "in-progress",
  Completed = "completed", 
  Cancelled = "cancelled"
}

export interface Session {
  id: string;
  title: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  start: Date;
  end: Date;
  serviceType: string;
  status: SessionStatus;
  notes?: string;
  paymentStatus: "Paid" | "Pending" | "Refunded";
  paymentAmount: number;
  calendarEventId?: string;
}
