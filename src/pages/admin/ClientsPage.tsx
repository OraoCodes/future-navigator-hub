
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const ClientsPage = () => {
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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-navy">Clients</h1>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search clients..."
              className="pl-8 bg-white"
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Clients</CardTitle>
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <div className="flex h-full items-center justify-center bg-muted text-xs">
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
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          client.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : client.status === "Inactive"
                            ? "bg-gray-100 text-gray-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {client.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ClientsPage;
