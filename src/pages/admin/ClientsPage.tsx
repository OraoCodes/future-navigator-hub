
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, MoreHorizontal } from "lucide-react";

// Sample client data
const clients = [
  { id: 1, name: "Emma Wilson", email: "emma.wilson@example.com", phone: "555-123-4567", jobTitle: "Marketing Director", lastSession: "2023-06-15", status: "Active" },
  { id: 2, name: "John Doe", email: "john.doe@example.com", phone: "555-234-5678", jobTitle: "Software Engineer", lastSession: "2023-06-10", status: "Active" },
  { id: 3, name: "Sarah Johnson", email: "sarah.j@example.com", phone: "555-345-6789", jobTitle: "HR Manager", lastSession: "2023-06-08", status: "Active" },
  { id: 4, name: "Michael Brown", email: "michael.b@example.com", phone: "555-456-7890", jobTitle: "Financial Analyst", lastSession: "2023-06-05", status: "Inactive" },
  { id: 5, name: "Alice Smith", email: "alice.smith@example.com", phone: "555-567-8901", jobTitle: "UX Designer", lastSession: "2023-06-01", status: "Active" },
  { id: 6, name: "David Lee", email: "david.lee@example.com", phone: "555-678-9012", jobTitle: "Product Manager", lastSession: "2023-05-28", status: "Inactive" },
  { id: 7, name: "Jennifer Taylor", email: "jennifer.t@example.com", phone: "555-789-0123", jobTitle: "Sales Director", lastSession: "2023-05-25", status: "Active" },
];

const ClientsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-navy">Clients</h1>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Client
          </Button>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle>Client Management</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  type="search" 
                  placeholder="Search clients..." 
                  className="pl-8" 
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Last Session</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.jobTitle}</TableCell>
                    <TableCell>{client.lastSession}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        client.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}>
                        {client.status}
                      </span>
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
      </div>
    </DashboardLayout>
  );
};

export default ClientsPage;
