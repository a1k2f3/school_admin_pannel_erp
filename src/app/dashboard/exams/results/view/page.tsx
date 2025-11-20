"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function ViewResults() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <h1 className="text-4xl font-bold text-purple-700">Exam Results - Class 10</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Roll</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>%</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Rank</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell className="font-bold">Aarav Sharma</TableCell>
            <TableCell>487/500</TableCell>
            <TableCell className="font-bold text-green-600">97.4%</TableCell>
            <TableCell><Badge className="bg-green-600">A+</Badge></TableCell>
            <TableCell><Badge className="bg-yellow-500 text-white">1st</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}