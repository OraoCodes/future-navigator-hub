
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Avatar } from "@/components/ui/avatar";
import { Pencil, User } from "lucide-react";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-navy">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs defaultValue="profile">
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your profile information visible to clients
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-2 border-white shadow-md">
                      <div className="flex h-full items-center justify-center bg-muted text-lg">
                        AM
                      </div>
                    </Avatar>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Profile Photo</p>
                    <p className="text-sm text-muted-foreground">
                      Upload a professional photo for your profile
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        Upload
                      </Button>
                      <Button variant="ghost" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="grid gap-5">
                  <div className="grid gap-2.5">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value="Admin" />
                  </div>

                  <div className="grid gap-2.5">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g. Career Coach & CV Specialist"
                    />
                  </div>

                  <div className="grid gap-2.5">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <textarea
                      id="bio"
                      className="min-h-32 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Write a short professional bio highlighting your expertise and experience..."
                    ></textarea>
                  </div>

                  <div className="grid gap-2.5">
                    <Label htmlFor="expertise">Areas of Expertise</Label>
                    <Input
                      id="expertise"
                      placeholder="e.g. CV Writing, Career Transitions, Interview Preparation"
                    />
                    <p className="text-sm text-muted-foreground">
                      Separate multiple areas with commas
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Manage how clients can reach you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value="admin@careermentor.com" />
                </div>

                <div className="grid gap-2.5">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="grid gap-2.5">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" type="url" placeholder="https://yourwebsite.com" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Update your account preferences and security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2.5">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" value="admin" />
                </div>

                <div className="grid gap-2.5">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>

                <div className="grid gap-2.5">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>

                <div className="grid gap-2.5">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Update Password</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Timezone Settings</CardTitle>
                <CardDescription>
                  Set your timezone for accurate scheduling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2.5">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="eastern">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eastern">Eastern Time (ET)</SelectItem>
                      <SelectItem value="central">Central Time (CT)</SelectItem>
                      <SelectItem value="mountain">Mountain Time (MT)</SelectItem>
                      <SelectItem value="pacific">Pacific Time (PT)</SelectItem>
                      <SelectItem value="alaska">Alaska Time (AKT)</SelectItem>
                      <SelectItem value="hawaii">Hawaii Time (HT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delete Account</CardTitle>
                <CardDescription>
                  Permanently delete your account and all associated data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Once you delete your account, there is no going back. All your
                  data will be permanently removed.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive">Delete Account</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>
                  Manage which emails you receive from us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Bookings</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when clients book sessions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Session Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive reminders before upcoming sessions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Payment Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about payments
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive promotional emails and updates
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>In-App Notifications</CardTitle>
                <CardDescription>
                  Manage your in-app notification preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Messages</Label>
                    <p className="text-sm text-muted-foreground">
                      Show notifications for new client messages
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Booking Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Show notifications for booking changes
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>System Announcements</Label>
                    <p className="text-sm text-muted-foreground">
                      Show notifications for system updates
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Calendar Settings</CardTitle>
                <CardDescription>
                  Configure your availability and booking settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2.5">
                  <Label htmlFor="buffer-time">Buffer Time Between Sessions</Label>
                  <Select defaultValue="15">
                    <SelectTrigger id="buffer-time">
                      <SelectValue placeholder="Select buffer time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">None</SelectItem>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">
                    Time between sessions to prepare for the next client
                  </p>
                </div>

                <Separator />

                <div className="grid gap-2.5">
                  <Label htmlFor="advance-notice">Minimum Booking Notice</Label>
                  <Select defaultValue="24">
                    <SelectTrigger id="advance-notice">
                      <SelectValue placeholder="Select minimum notice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No minimum</SelectItem>
                      <SelectItem value="1">1 hour</SelectItem>
                      <SelectItem value="3">3 hours</SelectItem>
                      <SelectItem value="12">12 hours</SelectItem>
                      <SelectItem value="24">24 hours</SelectItem>
                      <SelectItem value="48">48 hours</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">
                    Minimum notice required for clients to book a session
                  </p>
                </div>

                <Separator />

                <div className="grid gap-2.5">
                  <Label className="text-base">Work Hours</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="start-time">Start Time</Label>
                      <Select defaultValue="9">
                        <SelectTrigger id="start-time">
                          <SelectValue placeholder="Select start time" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }).map((_, i) => (
                            <SelectItem key={i} value={i.toString()}>
                              {i === 0
                                ? "12:00 AM"
                                : i < 12
                                ? `${i}:00 AM`
                                : i === 12
                                ? "12:00 PM"
                                : `${i - 12}:00 PM`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-time">End Time</Label>
                      <Select defaultValue="17">
                        <SelectTrigger id="end-time">
                          <SelectValue placeholder="Select end time" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }).map((_, i) => (
                            <SelectItem key={i} value={i.toString()}>
                              {i === 0
                                ? "12:00 AM"
                                : i < 12
                                ? `${i}:00 AM`
                                : i === 12
                                ? "12:00 PM"
                                : `${i - 12}:00 PM`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label className="text-base">Working Days</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (day) => (
                        <div
                          key={day}
                          className="flex items-center space-x-2"
                        >
                          <Switch
                            id={`day-${day.toLowerCase()}`}
                            defaultChecked={
                              !["Sat", "Sun"].includes(day)
                            }
                          />
                          <Label htmlFor={`day-${day.toLowerCase()}`}>
                            {day}
                          </Label>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Settings</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Calendar Integrations</CardTitle>
                <CardDescription>
                  Connect your external calendars for seamless scheduling
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.5 4h-19C1.673 4 1 4.673 1 5.5v15c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5zm0 1.5v3h-19v-3h19zm-19 15v-10.5h19V20.5h-19z" />
                        <path d="M8 17h10v1H8zm0-4h6v1H8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Google Calendar</p>
                      <p className="text-sm text-muted-foreground">
                        Sync events with your Google Calendar
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1.5 13a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 17V7A1.5 1.5 0 015 5.5h14A1.5 1.5 0 0120.5 7v10z" />
                        <path d="M6 8h12v1H6zm0 4h5v1H6zm0 4h9v1H6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Microsoft Outlook</p>
                      <p className="text-sm text-muted-foreground">
                        Sync events with your Outlook Calendar
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.998 2.005c5.518 0 9.997 4.48 9.997 9.997 0 5.518-4.479 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497z" />
                        <path d="M12 6v6h4.5v1.5h-6V6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Apple Calendar</p>
                      <p className="text-sm text-muted-foreground">
                        Sync events with your iCloud Calendar
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
