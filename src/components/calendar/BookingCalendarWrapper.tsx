
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Initialize the localizer
const localizer = momentLocalizer(moment);

const BookingCalendarWrapper = ({ events, onSelectSlot, onSelectEvent }) => {
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
