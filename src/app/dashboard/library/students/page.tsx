"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function IssuedBooks() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <h1 className="text-4xl font-bold text-indigo-700">Books Issued to Students</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Book</TableHead>
            <TableHead>Issue Date</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold">Aarav Sharma</TableCell>
            <TableCell>10-A</TableCell>
            <TableCell>Harry Potter</TableCell>
            <TableCell>10 Nov</TableCell>
            <TableCell>24 Nov</TableCell>
            <TableCell><Badge className="bg-green-600">On Time</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}