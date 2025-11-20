// app/(dashboard)/attendance/students/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, XCircle, Users } from "lucide-react";
import Link from "next/link";

export default function TakeAttendance() {
  const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const students = [
    { roll: "01", name: "Aarav Sharma", status: "present" },
    { roll: "02", name: "Diya Patel", status: "present" },
    { roll: "03", name: "Vihaan Reddy", status: "absent" },
    { roll: "04", name: "Ananya Gupta", status: "present" },
    { roll: "05", name: "Ishaan Kumar", status: "late" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-700">Take Student Attendance</h1>
          <p className="text-gray-600 mt-2 flex items-center gap-2">
            <Calendar className="w-5 h-5" /> Today: <strong>{today}</strong>
          </p>
        </div>
        <Link href="/dashboard/attendance/students/today">
          <Button className="gap-2 bg-green-600 hover:bg-green-700">
            <CheckCircle2 className="w-5 h-5" /> Quick Today Attendance
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle>Class 10-A</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {students.map((s) => (
                <div key={s.roll} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {s.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{s.name}</p>
                      <p className="text-sm text-gray-600">Roll: {s.roll}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle2 className="w-5 h-5" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                      <XCircle className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600">Save Attendance</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}