"use client";

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

export default function PendingPayments() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-red-700">Pending Fee Payments</h1>
        <Button className="bg-red-600 gap-3">
          <Mail className="w-5 h-5" /> Send Reminder to All
        </Button>
      </div>

      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-8 text-center">
        <p className="text-7xl font-bold text-red-700">₹18,45,000</p>
        <p className="text-2xl">Total Pending Amount</p>
      </div>

      <Table>
        {/* Same structure as above but with red badges and "Remind" buttons */}
      </Table>
    </div>
  );
}