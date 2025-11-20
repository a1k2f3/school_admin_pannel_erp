// app/(dashboard)/fees/reports/daily/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, Download, Calendar } from "lucide-react";

export default function DailyReport() {
  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Daily Fee Collection Report
        </h1>
        <p className="text-2xl text-gray-700 mt-4 flex items-center justify-center gap-3">
          <Calendar className="w-8 h-8 text-emerald-600" />
          {today}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader className="text-center">
            <CardTitle className="text-emerald-800">Total Collected</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-6xl font-bold text-emerald-700 flex items-center justify-center gap-2">
              <IndianRupee className="w-12 h-12" />4,82,500
            </p>
          </CardContent>
        </Card>
        <Card className="border-2 border-green-300">
          <CardHeader className="text-center"><CardTitle>Cash</CardTitle></CardHeader>
          <CardContent className="text-center">
            <p className="text-5xl font-bold text-green-600">₹1,25,000</p>
            <p className="text-sm text-gray-600 mt-2">42 Payments</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-blue-300">
          <CardHeader className="text-center"><CardTitle>UPI / Card</CardTitle></CardHeader>
          <CardContent className="text-center">
            <p className="text-5xl font-bold text-blue-600">₹3,57,500</p>
            <p className="text-sm text-gray-600 mt-2">89 Payments</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-purple-300">
          <CardHeader className="text-center"><CardTitle>Transactions</CardTitle></CardHeader>
          <CardContent className="text-center">
            <p className="text-6xl font-bold text-purple-700">131</p>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card className="border-2 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex justify-between items-center">
          <CardTitle className="text-2xl">Today's Payments</CardTitle>
          <Button className="bg-white text-emerald-700 hover:bg-gray-100 gap-2">
            <Download className="w-5 h-5" /> Export Excel
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Receipt</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Mode</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-emerald-50">
                <TableCell className="font-bold">#FEE2025-1421</TableCell>
                <TableCell>Aarav Sharma</TableCell>
                <TableCell>10-A</TableCell>
                <TableCell className="font-bold text-emerald-700">₹60,000</TableCell>
                <TableCell><Badge className="bg-blue-600">UPI</Badge></TableCell>
                <TableCell>02:41 PM</TableCell>
              </TableRow>
              {/* More rows */}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}