"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { IndianRupee } from "lucide-react";

export default function LibraryFines() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-orange-700">Library Fines</h1>
        <p className="text-8xl font-bold text-orange-700 mt-8">₹4,250</p>
        <p className="text-3xl mt-4">Collected This Month</p>
      </div>

      <Table>
        <TableHeader><TableRow><TableHead>Student</TableHead><TableHead>Book</TableHead><TableHead>Overdue Days</TableHead><TableHead>Fine</TableHead><TableHead>Action</TableHead></TableRow></TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold">Vihaan Reddy</TableCell>
            <TableCell>Science NCERT</TableCell>
            <TableCell>5 Days</TableCell>
            <TableCell className="font-bold text-orange-700 flex items-center gap-1">
              <IndianRupee className="w-5 h-5" />500
            </TableCell>
            <TableCell><Button size="sm" className="bg-orange-600">Collect Fine</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}