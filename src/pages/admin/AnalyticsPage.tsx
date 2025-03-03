
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AnalyticsPage = () => {
  // Sample data for charts
  const monthlyData = [
    { name: 'Jan', revenue: 1200, sessions: 10 },
    { name: 'Feb', revenue: 1900, sessions: 15 },
    { name: 'Mar', revenue: 2400, sessions: 20 },
    { name: 'Apr', revenue: 2200, sessions: 18 },
    { name: 'May', revenue: 2600, sessions: 22 },
    { name: 'Jun', revenue: 3100, sessions: 28 },
  ];

  const weeklyData = [
    { name: 'Mon', revenue: 420, sessions: 4 },
    { name: 'Tue', revenue: 380, sessions: 3 },
    { name: 'Wed', revenue: 550, sessions: 5 },
    { name: 'Thu', revenue: 490, sessions: 4 },
    { name: 'Fri', revenue: 600, sessions: 6 },
    { name: 'Sat', revenue: 350, sessions: 3 },
    { name: 'Sun', revenue: 200, sessions: 2 },
  ];

  const serviceData = [
    { name: 'CV Review', value: 35 },
    { name: 'Career Coaching', value: 45 },
    { name: 'Mock Interviews', value: 20 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-navy">Analytics</h1>
          <p className="text-muted-foreground">Track your business performance with detailed analytics.</p>
        </div>
        
        <Tabs defaultValue="revenue">
          <TabsList>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="revenue" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$13,400</div>
                  <p className="text-sm text-muted-foreground">Last 6 months</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Average Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$127</div>
                  <p className="text-sm text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">24%</div>
                  <p className="text-sm text-muted-foreground">+2% from last month</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Revenue Over Time</CardTitle>
                <CardDescription>Monthly revenue from January to June</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} width={80} tickFormatter={(value) => `$${value}`} />
                      <Tooltip 
                        formatter={(value) => [`$${value}`, 'Revenue']}
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #f0f0f0',
                          borderRadius: '6px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#002366" 
                        strokeWidth={3}
                        activeDot={{ r: 8, fill: '#002366', stroke: 'white', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Weekly Revenue Breakdown</CardTitle>
                <CardDescription>Revenue for the current week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={weeklyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} width={80} tickFormatter={(value) => `$${value}`} />
                      <Tooltip 
                        formatter={(value) => [`$${value}`, 'Revenue']}
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #f0f0f0',
                          borderRadius: '6px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                        }}
                      />
                      <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sessions" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Total Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">113</div>
                  <p className="text-sm text-muted-foreground">Last 6 months</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Completion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">97%</div>
                  <p className="text-sm text-muted-foreground">+1% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Avg. Duration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">52 min</div>
                  <p className="text-sm text-muted-foreground">-3 min from last month</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Sessions Over Time</CardTitle>
                <CardDescription>Monthly sessions from January to June</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} width={60} />
                      <Tooltip 
                        formatter={(value) => [`${value}`, 'Sessions']}
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #f0f0f0',
                          borderRadius: '6px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="sessions" 
                        stroke="#10b981" 
                        strokeWidth={3}
                        activeDot={{ r: 8, fill: '#10b981', stroke: 'white', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="services" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Most Popular</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Career Coaching</div>
                  <p className="text-sm text-muted-foreground">45% of all bookings</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Highest Rated</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Mock Interviews</div>
                  <p className="text-sm text-muted-foreground">4.9/5 average rating</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Most Profitable</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">CV Review</div>
                  <p className="text-sm text-muted-foreground">$122 avg. profit per session</p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Service Distribution</CardTitle>
                <CardDescription>Percentage breakdown of services booked</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={serviceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {serviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Percentage']}
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #f0f0f0',
                          borderRadius: '6px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
