
import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, MessageSquare, User, UserCheck, Clock, Check, X } from "lucide-react";

// Sample notification data
const allNotifications = [
  { 
    id: 1, 
    type: "booking", 
    title: "New Booking Request", 
    message: "Emma Wilson booked a CV Review session for June 17th", 
    time: "15 minutes ago", 
    read: false,
    icon: Calendar
  },
  { 
    id: 2, 
    type: "message", 
    title: "New Message", 
    message: "You have a new message from John Doe regarding his upcoming session", 
    time: "1 hour ago", 
    read: false,
    icon: MessageSquare
  },
  { 
    id: 3, 
    type: "user", 
    title: "New Client Registration", 
    message: "Sarah Johnson has registered as a new client", 
    time: "3 hours ago", 
    read: true,
    icon: User
  },
  { 
    id: 4, 
    type: "booking", 
    title: "Session Reminder", 
    message: "Reminder: You have a Career Coaching session with Michael Brown tomorrow at 10:00 AM", 
    time: "5 hours ago", 
    read: true,
    icon: Clock
  },
  { 
    id: 5, 
    type: "user", 
    title: "Client Profile Update", 
    message: "Alice Smith has updated her profile information", 
    time: "1 day ago", 
    read: true,
    icon: UserCheck
  },
  { 
    id: 6, 
    type: "message", 
    title: "New Message", 
    message: "You have a new message from David Lee about rescheduling his session", 
    time: "1 day ago", 
    read: true,
    icon: MessageSquare
  },
  { 
    id: 7, 
    type: "booking", 
    title: "Booking Cancelled", 
    message: "Jennifer Taylor has cancelled her Mock Interview session scheduled for May 30th", 
    time: "2 days ago", 
    read: true,
    icon: Calendar
  },
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(allNotifications);
  const [activeTab, setActiveTab] = useState("all");
  
  const unreadCount = notifications.filter(notif => !notif.read).length;
  
  const filteredNotifications = activeTab === "all" 
    ? notifications
    : activeTab === "unread"
      ? notifications.filter(notif => !notif.read)
      : notifications.filter(notif => notif.type === activeTab);
      
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-navy">Notifications</h1>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
            Mark all as read
          </Button>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle>Notification Center</CardTitle>
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                  <TabsTrigger value="booking">Bookings</TabsTrigger>
                  <TabsTrigger value="message">Messages</TabsTrigger>
                  <TabsTrigger value="user">Users</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredNotifications.length === 0 ? (
                <div className="text-center py-8">
                  <Bell className="mx-auto h-12 w-12 text-gray-300" />
                  <h3 className="mt-2 text-lg font-medium">No notifications</h3>
                  <p className="text-sm text-gray-500">
                    {activeTab === "unread" 
                      ? "You've read all notifications" 
                      : "You don't have any notifications yet"}
                  </p>
                </div>
              ) : (
                filteredNotifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`flex gap-4 p-4 rounded-lg border ${!notification.read ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-100'}`}
                  >
                    <div className={`p-2 rounded-full ${!notification.read ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <notification.icon className={`h-5 w-5 ${!notification.read ? 'text-blue-600' : 'text-gray-500'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{notification.title}</h4>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    </div>
                    {!notification.read && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => markAsRead(notification.id)}
                        className="h-8 w-8 self-start"
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-gray-500">Receive notifications via email</p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="email-notifications"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <h4 className="font-medium">Browser Notifications</h4>
                  <p className="text-sm text-gray-500">Show desktop notifications</p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="browser-notifications"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <h4 className="font-medium">Booking Notifications</h4>
                  <p className="text-sm text-gray-500">Notifications for new bookings and cancellations</p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="booking-notifications"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <div>
                  <h4 className="font-medium">Message Notifications</h4>
                  <p className="text-sm text-gray-500">Notifications for new messages</p>
                </div>
                <div className="flex items-center h-5">
                  <input
                    id="message-notifications"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;
