"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IndianRupee, Download, Printer, Table } from "lucide-react";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function GenerateChallan() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <h1 className="text-4xl font-bold text-indigo-700">Generate Fee Challan</h1>

      <div className="grid grid-cols-2 gap-6">
        <Input placeholder="Student Name / Admission No" className="h-14 text-lg" />
        <Input placeholder="Class" className="h-14 text-lg" />
      </div>

      <Card className="border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
          <h2 className="text-3xl font-bold">FEE CHALLAN</h2>
          <p className="text-xl">Delhi Public School • 2025-26</p>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="text-center space-y-3">
            <p className="text-2xl font-bold">Aarav Sharma</p>
            <p className="text-xl text-gray-600">Admission No: DPS2025-1001 • Class 10-A</p>
          </div>

          <Table>
            <TableHeader><TableRow><TableHead>Particulars</TableHead><TableHead className="text-right">Amount</TableHead></TableRow></TableHeader>
            <TableBody>
              <TableRow><TableCell>Tuition Fee</TableCell><TableCell className="text-right font-bold">₹45,000</TableCell></TableRow>
              <TableRow><TableCell>Development Fee</TableCell><TableCell className="text-right font-bold">₹15,000</TableCell></TableRow>
              <TableRow><TableCell>Late Fine</TableCell><TableCell className="text-right font-bold text-red-600">₹500</TableCell></TableRow>
            </TableBody>
          </Table>

          <div className="border-t-4 border-dashed pt-6 text-right">
            <p className="text-3xl font-bold text-indigo-700 flex items-center justify-end gap-2">
              Total: <IndianRupee className="w-8 h-8" /> 60,500
            </p>
            <p className="text-lg text-gray-600 mt-2">Due Date: 30 Nov 2025</p>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <Button size="lg" className="gap-3 bg-green-600 hover:bg-green-700">
              <Download className="w-6 h-6" /> Download PDF
            </Button>
            <Button size="lg" variant="outline" className="gap-3">
              <Printer className="w-6 h-6" /> Print
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}