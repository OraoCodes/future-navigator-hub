
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import BookingCalendar from "@/components/calendar/BookingCalendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, Calendar, List } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const CalendarView = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-accent1">Calendar</h1>
            <p className="text-muted-foreground">Manage your appointments and schedule</p>
          </div>
          <div className="flex gap-2">
            <div className="flex border rounded-md overflow-hidden">
              <Button variant="ghost" size="sm" className="rounded-none">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-none font-normal">
                Today
              </Button>
              <Button variant="ghost" size="sm" className="rounded-none">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Tabs defaultValue="month">
              <TabsList className="bg-muted/50 h-9">
                <TabsTrigger value="month" className="h-7">Month</TabsTrigger>
                <TabsTrigger value="week" className="h-7">Week</TabsTrigger>
                <TabsTrigger value="day" className="h-7">Day</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button size="sm" className="bg-accent2 hover:bg-accent2/90">
              <Plus className="h-4 w-4 mr-1" />
              New Booking
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-1 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">QUICK ACTIONS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start bg-accent1 hover:bg-accent1/90">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start text-accent1 border-accent1/20">
                  <List className="h-4 w-4 mr-2" />
                  List View
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">UPCOMING SESSIONS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-1">
                {[
                  { 
                    client: "John Doe", 
                    service: "Resume Review", 
                    time: "Today, 2:00 PM",
                    status: "upcoming" 
                  },
                  { 
                    client: "Alice Smith", 
                    service: "Career Coaching", 
                    time: "Tomorrow, 10:00 AM",
                    status: "upcoming" 
                  },
                  { 
                    client: "Robert Johnson", 
                    service: "Interview Prep", 
                    time: "Feb 22, 3:30 PM",
                    status: "upcoming" 
                  }
                ].map((session, index) => (
                  <div key={index} className="p-3 rounded-lg bg-pastel-green border border-accent2/20">
                    <div className="font-medium text-accent2">{session.client}</div>
                    <div className="text-xs text-muted-foreground">{session.service}</div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="text-xs font-medium">{session.time}</div>
                      <Badge className="bg-accent2/10 text-accent2 hover:bg-accent2/20">Join</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-4">
            <Card className="p-4">
              <BookingCalendar />
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent2"></div>
            <span>Upcoming Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent4"></div>
            <span>Completed Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent5"></div>
            <span>Cancelled Sessions</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CalendarView;
