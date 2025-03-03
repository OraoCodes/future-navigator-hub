
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingCalendar from "@/components/calendar/BookingCalendar";

const CalendarView = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-navy">Calendar</h1>
        </div>
        
        <BookingCalendar />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
            <span>Upcoming Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            <span>Completed Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span>Cancelled Sessions</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CalendarView;
