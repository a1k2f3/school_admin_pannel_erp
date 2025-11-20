// app/(dashboard)/attendance/students/today/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Clock, Users } from "lucide-react";

export default function TodayAttendance() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-green-700">Today's Attendance</h1>
        <p className="text-2xl text-gray-600 mt-4">Wednesday, 19 November 2025</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="text-center p-8 border-2 border-green-200">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <p className="text-6xl font-bold text-green-600">142</p>
          <p className="text-xl text-gray-700">Present</p>
        </Card>
        <Card className="text-center p-8 border-2 border-red-200">
          <XCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <p className="text-6xl font-bold text-red-600">8</p>
          <p className="text-xl text-gray-700">Absent</p>
        </Card>
        <Card className="text-center p-8 border-2 border-orange-200">
          <Clock className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <p className="text-6xl font-bold text-orange-600">6</p>
          <p className="text-xl text-gray-700">Late</p>
        </Card>
        <Card className="text-center p-8 border-2 border-blue-200">
          <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <p className="text-6xl font-bold text-blue-600">156</p>
          <p className="text-xl text-gray-700">Total</p>
        </Card>
      </div>

      <div className="text-center">
        <Badge className="text-2xl px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600">
          Attendance Completed - 98.7% Today
        </Badge>
      </div>
    </div>
  );
}