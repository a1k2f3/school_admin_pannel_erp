"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function AssignedItems() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <h1 className="text-5xl font-bold text-emerald-700">Assigned / Issued Items</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Assigned To</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Date Issued</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold">Projector</TableCell>
            <TableCell>Mr. Rajesh (Science Lab)</TableCell>
            <TableCell>Physics Lab</TableCell>
            <TableCell>1</TableCell>
            <TableCell>10 Nov 2025</TableCell>
            <TableCell><Badge className="bg-green-600">Issued</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">Cricket Kit</TableCell>
            <TableCell>Sports Department</TableCell>
            <TableCell>Sports</TableCell>
            <TableCell>5 sets</TableCell>
            <TableCell>05 Nov 2025</TableCell>
            <TableCell><Badge className="bg-blue-600">In Use</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}