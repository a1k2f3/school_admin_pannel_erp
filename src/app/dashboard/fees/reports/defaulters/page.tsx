"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Mail, Phone } from "lucide-react";

export default function DefaultersReport() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-700 flex items-center justify-center gap-4">
          <AlertCircle className="w-16 h-16" />
          Fee Defaulters Report
        </h1>
        <p className="text-2xl text-gray-700 mt-4">November 2025 Term • Due Date Passed</p>
      </div>

      <div className="bg-red-50 border-4 border-red-500 rounded-3xl p-12 text-center">
        <p className="text-9xl font-bold text-red-700">47</p>
        <p className="text-4xl mt-6 text-red-800">Students Haven't Paid Yet</p>
        <p className="text-7xl mt-4 text-red-700">₹18,45,000 Pending</p>

        <div className="flex justify-center gap-6 mt-10">
          <Button size="lg" className="gap-4 text-xl px-10 bg-red-600 hover:bg-red-700">
            <Mail className="w-8 h-8" /> Send SMS to All Parents
          </Button>
          <Button size="lg" variant="outline" className="gap-4 text-xl px-10 border-red-600 text-red-600">
            <Phone className="w-8 h-8" /> Call Defaulters
          </Button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Amount Due</TableHead>
            <TableHead>Days Overdue</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-red-50">
            <TableCell className="font-bold">Vihaan Reddy</TableCell>
            <TableCell>10-A</TableCell>
            <TableCell className="font-bold text-red-700">₹85,000</TableCell>
            <TableCell><Badge className="bg-red-600">12 Days</Badge></TableCell>
            <TableCell>
              <Button size="sm" className="bg-red-600">Send Reminder</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}