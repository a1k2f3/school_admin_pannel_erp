"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function FinesPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <h1 className="text-4xl font-bold text-orange-700">Fine Rules & Management</h1>

      <Card className="p-8">
        <h2 className="text-2xl font-bold mb-6">Current Fine Rules</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-6 bg-orange-50 rounded-xl border">
            <div>
              <p className="text-xl font-bold">Late Fee After Due Date</p>
              <p className="text-gray-600">₹100 per day after 10th of every month</p>
            </div>
            <Badge className="text-lg px-6">ACTIVE</Badge>
          </div>
          {/* More rules */}
        </div>
      </Card>
    </div>
  );
}