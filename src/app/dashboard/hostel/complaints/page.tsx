"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function HostelComplaints() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-orange-700">Hostel Complaints</h1>
        <p className="text-8xl font-bold text-orange-700 mt-8">8</p>
        <p className="text-3xl mt-4">Pending Resolution</p>
      </div>

      <div className="space-y-8">
        <div className="bg-orange-50 border-4 border-orange-400 rounded-3xl p-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold">Water Leak in Room A-312</p>
              <p className="text-lg text-gray-600">Reported by Aryan Mehta • 18 Nov 2025</p>
            </div>
            <Button className="gap-3 bg-orange-600 hover:bg-orange-700">
              <CheckCircle2 className="w-6 h-6" /> Mark Resolved
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}