// app/(dashboard)/attendance/students/reports/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
export default function AttendanceReports() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <h1 className="text-4xl font-bold text-blue-700">Attendance Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader><CardTitle>Monthly Summary (Nov 2025)</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader><TableRow><TableHead>Class</TableHead><TableHead>Avg %</TableHead><TableHead>Best</TableHead></TableRow></TableHeader>
              <TableBody>
                <TableRow><TableCell>Class 10-A</TableCell><TableCell className="font-bold text-green-600">98.2%</TableCell><TableCell>100%</TableCell></TableRow>
                <TableRow><TableCell>Class 10-B</TableCell><TableCell className="font-bold text-green-600">97.8%</TableCell><TableCell>99%</TableCell></TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Top Performers</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Aarav Sharma", "Ananya Gupta", "Saanvi Singh"].map((name, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                  <span className="font-semibold text-lg">{name}</span>
                  <Badge className="bg-green-600 text-white text-lg px-4">100%</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}