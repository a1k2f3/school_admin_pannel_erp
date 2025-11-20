"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { IndianRupee } from "lucide-react";

export default function AllPayments() {
  const payments = [
    { id: "PAY001", name: "Aarav Sharma", class: "10-A", amount: 60000, date: "18 Nov 2025", mode: "UPI" },
    { id: "PAY002", name: "Diya Patel", class: "10-A", amount: 85000, date: "17 Nov 2025", mode: "Cash" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <h1 className="text-4xl font-bold text-green-700">All Fee Payments</h1>
      <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 text-center">
        <p className="text-6xl font-bold text-green-700">₹1,28,45,000</p>
        <p className="text-2xl text-gray-700">Total Collected This Year</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Receipt No</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Mode</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map(p => (
            <TableRow key={p.id}>
              <TableCell className="font-bold">{p.id}</TableCell>
              <TableCell className="font-medium">{p.name}</TableCell>
              <TableCell>{p.class}</TableCell>
              <TableCell className="font-bold text-green-600 flex items-center gap-1">
                <IndianRupee className="w-5 h-5" /> {p.amount.toLocaleString()}
              </TableCell>
              <TableCell>{p.date}</TableCell>
              <TableCell><Badge>{p.mode}</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}