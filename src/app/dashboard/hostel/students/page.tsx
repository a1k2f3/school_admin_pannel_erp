"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function HostelStudents() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <h1 className="text-5xl font-bold text-pink-700">Hostel Students</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Hostel</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold">Rohan Gupta</TableCell>
            <TableCell>11-A</TableCell>
            <TableCell>A-205</TableCell>
            <TableCell>Boys Hostel A</TableCell>
            <TableCell><Badge className="bg-green-600">Active</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}