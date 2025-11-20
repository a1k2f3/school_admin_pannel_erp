"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function CustomReport() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 p-6">
      <h1 className="text-6xl font-bold text-center text-violet-700">Custom Report Builder</h1>

      <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-4 border-violet-400 rounded-3xl p-16 text-center">
        <div className="space-y-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            <Button size="lg" variant="outline" className="h-32 text-2xl">Fees vs Attendance</Button>
            <Button size="lg" variant="outline" className="h-32 text-2xl">Top Performers List</Button>
            <Button size="lg" variant="outline" className="h-32 text-2xl">Transport Usage</Button>
            <Button size="lg" variant="outline" className="h-32 text-2xl">Hostel Occupancy</Button>
          </div>
          <Button size="lg" className="text-3xl px-20 py-12 gap-6 bg-gradient-to-r from-violet-600 to-purple-600">
            <Download className="w-12 h-12" /> Generate Custom Report
          </Button>
        </div>
      </div>
    </div>
  );
}