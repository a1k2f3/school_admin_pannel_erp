// app/(dashboard)/attendance/students/absentees/page.tsx
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function Absentees() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-red-700">Today's Absentees</h1>
        <Button className="gap-2 bg-red-600 hover:bg-red-700">
          <Mail className="w-5 h-5" /> Notify All Parents
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Parent</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-semibold">Vihaan Reddy</TableCell>
            <TableCell>10-A</TableCell>
            <TableCell>Mr. Reddy</TableCell>
            <TableCell>+91 98765 43210</TableCell>
            <TableCell>
              <Button size="sm" className="gap-2"><Phone className="w-4 h-4" /> Call</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}