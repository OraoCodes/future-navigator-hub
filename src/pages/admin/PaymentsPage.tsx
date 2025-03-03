
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Download, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PaymentsPage = () => {
  // Sample payment data
  const payments = [
    {
      id: "INV-001",
      client: "John Doe",
      service: "CV Review",
      date: "June 12, 2023",
      amount: "$99.00",
      status: "Paid",
    },
    {
      id: "INV-002",
      client: "Alice Smith",
      service: "Career Coaching (3 sessions)",
      date: "June 10, 2023",
      amount: "$447.00",
      status: "Paid",
    },
    {
      id: "INV-003",
      client: "Emma Wilson",
      service: "Mock Interview",
      date: "June 8, 2023",
      amount: "$129.00",
      status: "Refunded",
    },
    {
      id: "INV-004",
      client: "Robert Johnson",
      service: "CV Review + LinkedIn Optimization",
      date: "June 5, 2023",
      amount: "$149.00",
      status: "Paid",
    },
    {
      id: "INV-005",
      client: "Michael Brown",
      service: "Career Coaching (1 session)",
      date: "June 2, 2023",
      amount: "$149.00",
      status: "Pending",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-navy">Payments</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search invoices..."
                className="pl-8 bg-white w-full sm:w-64"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Download size={16} />
              Export
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Invoice ID
                      <ArrowUpDown size={14} />
                    </div>
                  </TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Date
                      <ArrowUpDown size={14} />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-1">
                      Amount
                      <ArrowUpDown size={14} />
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.client}</TableCell>
                    <TableCell>{payment.service}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          payment.status === "Paid"
                            ? "default"
                            : payment.status === "Refunded"
                            ? "destructive"
                            : "outline"
                        }
                      >
                        {payment.status}
                      </Badge>
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
