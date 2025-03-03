
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, addDays } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BookingDetails from './BookingDetails';
import { Booking, BookingStatus } from '@/types/booking';

// Get current date
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const currentDay = today.getDate();

// Sample data with current dates
const sampleBookings: Booking[] = [
  {
    id: '1',
    title: 'CV Review with John Doe',
    start: addDays(new Date(currentYear, currentMonth, currentDay), 1),
    end: addDays(new Date(currentYear, currentMonth, currentDay, 10, 45), 1),
    clientName: 'John Doe',
    clientEmail: 'john.doe@example.com',
    serviceType: 'CV Review',
    status: BookingStatus.Upcoming,
    notes: 'Looking for feedback on tech leadership positions',
    paymentStatus: 'Paid',
    paymentAmount: 99,
  },
  {
    id: '2',
    title: 'Career Coaching with Alice Smith',
    start: addDays(new Date(currentYear, currentMonth, currentDay, 14, 0), 2),
    end: addDays(new Date(currentYear, currentMonth, currentDay, 15, 0), 2),
    clientName: 'Alice Smith',
    clientEmail: 'alice.smith@example.com',
    serviceType: 'Career Coaching',
    status: BookingStatus.Upcoming,
    notes: 'Transitioning from engineering to product management',
    paymentStatus: 'Paid',
    paymentAmount: 149,
  },
  {
    id: '3',
    title: 'Mock Interview with Bob Johnson',
    start: new Date(currentYear, currentMonth, currentDay, 11, 0),
    end: new Date(currentYear, currentMonth, currentDay, 12, 0),
    clientName: 'Bob Johnson',
    clientEmail: 'bob.johnson@example.com',
    serviceType: 'Mock Interview',
    status: BookingStatus.Completed,
    notes: 'Preparing for senior React developer interviews',
    paymentStatus: 'Paid',
    paymentAmount: 129,
  },
  {
    id: '4',
    title: 'CV Review with Emma Wilson',
    start: addDays(new Date(currentYear, currentMonth, currentDay, 9, 0), 3),
    end: addDays(new Date(currentYear, currentMonth, currentDay, 9, 45), 3),
    clientName: 'Emma Wilson',
    clientEmail: 'emma.wilson@example.com',
    serviceType: 'CV Review',
    status: BookingStatus.Cancelled,
    notes: 'New graduate looking for first tech role',
    paymentStatus: 'Refunded',
    paymentAmount: 99,
  },
];

// Direct import for locale
const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const BookingCalendar = () => {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  // Function to get event style based on booking status
  const eventStyleGetter = (event: Booking) => {
    let backgroundColor = '#4ade80'; // Green for upcoming
    let borderColor = '#22c55e';
    
    if (event.status === BookingStatus.Completed) {
      backgroundColor = '#9ca3af'; // Gray for completed
      borderColor = '#6b7280';
    } else if (event.status === BookingStatus.Cancelled) {
      backgroundColor = '#ef4444'; // Red for cancelled
      borderColor = '#dc2626';
    }
    
    return {
      style: {
        backgroundColor,
        borderColor,
        borderRadius: '6px',
        opacity: 0.9,
        color: 'white',
        border: '0px',
        display: 'block',
        fontWeight: '500',
        padding: '4px 8px',
      },
    };
  };

  const handleSelectEvent = (event: Booking) => {
    setSelectedBooking(event);
  };

  const handleCloseDetails = () => {
    setSelectedBooking(null);
  };

  return (
    <div className="h-[70vh] bg-white rounded-xl shadow-sm p-4 border">
      <Calendar
        localizer={localizer}
        events={sampleBookings}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={handleSelectEvent}
        views={['month', 'week', 'day']}
        defaultView="week"
        defaultDate={today}
      />
      
      {selectedBooking && (
        <BookingDetails booking={selectedBooking} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default BookingCalendar;
