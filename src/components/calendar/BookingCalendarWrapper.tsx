
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Initialize the localizer
const localizer = momentLocalizer(moment);

interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

interface BookingCalendarWrapperProps {
  events: Event[];
  onSelectSlot: (slotInfo: any) => void;
  onSelectEvent: (event: Event) => void;
}

const BookingCalendarWrapper: React.FC<BookingCalendarWrapperProps> = ({ 
  events, 
  onSelectSlot, 
  onSelectEvent 
}) => {
  return (
    <div className="h-[600px] w-full">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={onSelectSlot}
        onSelectEvent={onSelectEvent}
        className="rounded-md border bg-white p-4"
      />
    </div>
  );
};

export default BookingCalendarWrapper;
