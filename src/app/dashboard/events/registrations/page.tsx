"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function EventRegistrations() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold text-purple-700">Event Registrations</h1>
        <Button className="gap-3 bg-purple-600">
          <Download className="w-6 h-6" /> Export Excel
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Registered On</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold">Aarav Sharma</TableCell>
            <TableCell>10-A</TableCell>
            <TableCell>100m Sprint, Long Jump</TableCell>
            <TableCell>15 Nov 2025</TableCell>
            <TableCell><Badge className="bg-green-600">Confirmed</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}