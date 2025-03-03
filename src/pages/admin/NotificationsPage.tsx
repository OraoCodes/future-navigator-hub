
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, MessageSquare, User, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "booking" | "message" | "payment" | "system";
  isRead: boolean;
};

const NotificationsPage = () => {
  // Sample notification data
  const notifications: Notification[] = [
    {
      id: "1",
      title: "New booking request",
      message: "Emma Wilson has booked a CV Review session for tomorrow at 9:00 AM.",
      time: "15 minutes ago",
      type: "booking",
      isRead: false,
    },
    {
      id: "2",
      title: "Payment received",
      message: "You've received a payment of $99 from John Doe for CV Review service.",
      time: "2 hours ago",
      type: "payment",
      isRead: false,
    },
    {
      id: "3",
      title: "New message",
      message: "Alice Smith sent you a message regarding her upcoming session.",
      time: "3 hours ago",
      type: "message",
      isRead: true,
    },
    {
      id: "4",
      title: "Session reminder",
      message: "You have a Career Coaching session with Robert Johnson tomorrow at 2:00 PM.",
      time: "5 hours ago",
      type: "booking",
      isRead: true,
    },
    {
      id: "5",
      title: "System update",
      message: "CareerMentor platform will undergo maintenance this Sunday from 2:00 AM to 4:00 AM.",
      time: "1 day ago",
      type: "system",
      isRead: true,
    },
    {
      id: "6",
      title: "Booking cancelled",
      message: "Michael Brown has cancelled his Mock Interview session scheduled for Friday.",
      time: "2 days ago",
      type: "booking",
      isRead: true,
    },
    {
      id: "7",
      title: "New review",
      message: "John Doe left a 5-star review for your CV Review service.",
      time: "3 days ago",
      type: "system",
      isRead: true,
    },
  ];

  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "booking":
        return <Calendar className="h-5 w-5" />;
      case "message":
        return <MessageSquare className="h-5 w-5" />;
      case "payment":
        return <CreditCard className="h-5 w-5" />;
      case "system":
        return <Bell className="h-5 w-5" />;
      default:
        return <User className="h-5 w-5" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "booking":
        return "bg-blue-100 text-blue-600";
      case "message":
        return "bg-purple-100 text-purple-600";
      case "payment":
        return "bg-green-100 text-green-600";
      case "system":
        return "bg-amber-100 text-amber-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-navy">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with your business activities</p>
          </div>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>
        
        <Tabs defaultValue="all">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="all">
                All
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {notifications.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                {unreadCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {unreadCount}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-6">
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y">
                  {notifications.map((notification) => (
                    <li 
                      key={notification.id} 
                      className={`p-4 hover:bg-gray-50 ${!notification.isRead ? "bg-blue-50/50" : ""}`}
                    >
                      <div className="flex gap-4">
                        <div className={`mt-0.5 p-2 rounded-full ${getNotificationColor(notification.type)}`}>
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">
                              {notification.title}
                              {!notification.isRead && (
                                <Badge variant="default" className="ml-2">New</Badge>
                              )}
                            </h3>
                            <span className="text-sm text-muted-foreground">
                              {notification.time}
                            </span>
                          </div>
                          <p className="text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="unread" className="mt-6">
            <Card>
              <CardContent className="p-0">
                {unreadCount > 0 ? (
                  <ul className="divide-y">
                    {notifications
                      .filter(n => !n.isRead)
                      .map((notification) => (
                        <li 
                          key={notification.id} 
                          className="p-4 hover:bg-gray-50 bg-blue-50/50"
                        >
                          <div className="flex gap-4">
                            <div className={`mt-0.5 p-2 rounded-full ${getNotificationColor(notification.type)}`}>
                              {getNotificationIcon(notification.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h3 className="font-medium">
                                  {notification.title}
                                  <Badge variant="default" className="ml-2">New</Badge>
                                </h3>
                                <span className="text-sm text-muted-foreground">
                                  {notification.time}
                                </span>
                              </div>
                              <p className="text-muted-foreground mt-1">
                                {notification.message}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Clock className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-1">No unread notifications</h3>
                    <p className="text-muted-foreground">You're all caught up!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;
