
import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { Search, UserPlus, Filter, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ClientsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample client data
  const clients = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      sessions: 3,
      lastBooking: "May 15, 2023",
      totalSpent: "$347",
      status: "Active",
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice.smith@example.com",
      sessions: 5,
      lastBooking: "June 2, 2023",
      totalSpent: "$725",
      status: "Active",
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      sessions: 1,
      lastBooking: "April 28, 2023",
      totalSpent: "$99",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      sessions: 2,
      lastBooking: "June 10, 2023",
      totalSpent: "$278",
      status: "Active",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      sessions: 0,
      lastBooking: "N/A",
      totalSpent: "$0",
      status: "Pending",
    },
  ];

  // Filter clients based on search query
  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get status badge color
  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return "bg-pastel-green text-accent2 border border-accent2/20";
      case "Inactive":
        return "bg-pastel-blue text-accent4 border border-accent4/20";
      case "Pending":
        return "bg-pastel-orange text-accent3 border border-accent3/20";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-accent1">Clients</h1>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search clients..."
                className="pl-8 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <Filter className="h-4 w-4" />
            </Button>
            <Button className="flex-shrink-0 bg-accent2 hover:bg-accent2/90" size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="pastel-card-purple">
            <div className="font-medium text-sm">Total Clients</div>
            <div className="text-2xl font-bold mt-1">42</div>
            <div className="text-xs mt-1 text-accent1/70">↑ 12% from last month</div>
          </div>
          
          <div className="pastel-card-green">
            <div className="font-medium text-sm">Active Clients</div>
            <div className="text-2xl font-bold mt-1">28</div>
            <div className="text-xs mt-1 text-accent2/70">↑ 8% from last month</div>
          </div>
          
          <div className="pastel-card-blue">
            <div className="font-medium text-sm">Sessions Booked</div>
            <div className="text-2xl font-bold mt-1">156</div>
            <div className="text-xs mt-1 text-accent4/70">↑ 24% from last month</div>
          </div>
          
          <div className="pastel-card-orange">
            <div className="font-medium text-sm">Revenue</div>
            <div className="text-2xl font-bold mt-1">$12,452</div>
            <div className="text-xs mt-1 text-accent3/70">↑ 16% from last month</div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-muted/50 mb-4">
            <TabsTrigger value="all">All Clients</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Client List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Sessions</TableHead>
                      <TableHead>Last Booking</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredClients.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar>
                              <div className="flex h-full items-center justify-center bg-accent1/10 text-xs text-accent1">
                                {client.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                            </Avatar>
                            <span className="font-medium">{client.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{client.email}</TableCell>
                        <TableCell>{client.sessions}</TableCell>
                        <TableCell>{client.lastBooking}</TableCell>
                        <TableCell>{client.totalSpent}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusBadge(client.status)}>
                            {client.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="active" className="mt-0">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">Showing active clients only.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="inactive" className="mt-0">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">Showing inactive clients only.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pending" className="mt-0">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">Showing pending clients only.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ClientsPage;
