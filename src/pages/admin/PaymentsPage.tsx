
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, FileText } from "lucide-react";

// Sample payment data
const payments = [
  { id: "INV-001", client: "Emma Wilson", service: "CV Review", amount: 99, date: "2023-06-15", status: "Completed" },
  { id: "INV-002", client: "John Doe", service: "Career Coaching", amount: 149, date: "2023-06-10", status: "Completed" },
  { id: "INV-003", client: "Sarah Johnson", service: "Mock Interview", amount: 129, date: "2023-06-08", status: "Completed" },
  { id: "INV-004", client: "Michael Brown", service: "Career Coaching", amount: 149, date: "2023-06-05", status: "Refunded" },
  { id: "INV-005", client: "Alice Smith", service: "CV Review", amount: 99, date: "2023-06-01", status: "Completed" },
  { id: "INV-006", client: "David Lee", service: "Mock Interview", amount: 129, date: "2023-05-28", status: "Failed" },
  { id: "INV-007", client: "Jennifer Taylor", service: "Career Coaching", amount: 149, date: "2023-05-25", status: "Completed" },
];

const PaymentsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-navy">Payments</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <h3 className="text-2xl font-bold">$3,240</h3>
                <p className="text-xs text-green-600 mt-1">+12% from last month</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
                <h3 className="text-2xl font-bold">2</h3>
                <p className="text-xs text-gray-500 mt-1">$278 total value</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <p className="text-sm font-medium text-muted-foreground">Average Transaction</p>
                <h3 className="text-2xl font-bold">$125</h3>
                <p className="text-xs text-green-600 mt-1">+5% from last month</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle>Transaction History</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  type="search" 
                  placeholder="Search transactions..." 
                  className="pl-8" 
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.client}</TableCell>
                    <TableCell>{payment.service}</TableCell>
                    <TableCell>${payment.amount}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        payment.status === "Completed" ? "bg-green-100 text-green-800" :
                        payment.status === "Refunded" ? "bg-amber-100 text-amber-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {payment.status}
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

export default PaymentsPage;
