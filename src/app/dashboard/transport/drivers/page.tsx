"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Drivers() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <h1 className="text-5xl font-bold text-indigo-700">Transport Drivers</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Driver</TableHead>
            <TableHead>License No</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Route</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="flex items-center gap-4">
              <Avatar><AvatarFallback>RK</AvatarFallback></Avatar>
              <span className="font-bold">Rajesh Kumar</span>
            </TableCell>
            <TableCell>DL-2025-789456</TableCell>
            <TableCell>+91 98765 43210</TableCell>
            <TableCell>R-01 Dwarka</TableCell>
            <TableCell><Badge className="bg-green-600">On Duty</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}