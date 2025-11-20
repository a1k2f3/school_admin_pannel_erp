// app/(dashboard)/teachers/salary/page.tsx
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";

export default function TeacherSalary() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Teacher Salary Slips</h1>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Teacher ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Month</TableHead>
              <TableHead>Gross Salary</TableHead>
              <TableHead>Deductions</TableHead>
              <TableHead>Net Pay</TableHead>
              <TableHead>Slip</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>TCH001</TableCell>
              <TableCell className="font-semibold">Priya Sharma</TableCell>
              <TableCell>May 2025</TableCell>
              <TableCell>₹65,000</TableCell>
              <TableCell>₹5,000</TableCell>
              <TableCell className="font-bold text-green-600">₹60,000</TableCell>
              <TableCell><Button size="sm" className="gap-2"><Download className="w-4 h-4" /> Download</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}