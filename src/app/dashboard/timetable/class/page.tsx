// app/(dashboard)/timetable/class/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Download, Printer } from "lucide-react";
import Link from "next/link";

export default function ClassTimetable() {
  const periods = ["8:00-9:00", "9:00-10:00", "10:15-11:15", "11:30-12:30", "1:00-2:00", "2:00-3:00"];

  const timetable = {
    Monday: ["Math", "Science", "English", "Hindi", "Social Studies", "Computer"],
    Tuesday: ["English", "Math", "Hindi", "Science", "PE", "Sanskrit"],
    Wednesday蔵: ["Science", "Social Studies", "Math", "English", "Computer", "Hindi"],
    Thursday: ["Hindi", "English", "Science", "Math", "Sanskrit", "PE"],
    Friday: ["Math", "Hindi", "Social Studies", "Computer", "English", "Science"],
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-blue-700">Class Timetable</h1>
          <p className="text-xl text-gray-600 mt-2">Class 10-A • Academic Year 2025-26</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="gap-2">
            <Download className="w-5 h-5" /> PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <Printer className="w-5 h-5" /> Print
          </Button>
        </div>
      </div>

      <Card className="border-2 shadow-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigoured-600 text-white">
          <CardTitle className="text-3xl text-center">Weekly Schedule</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-bold">Day</th>
                  {periods.map((p, i) => (
                    <th key={i} className="p-4 text-center"><Badge variant="secondary">{p}</Badge></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(timetable).map(([day, subjects]) => (
                  <tr key={day} className="hover:bg-blue-50 transition-colors border-t">
                    <td className="p-4 font-bold text-blue-800 bg-gray-50">{day}</td>
                    {subjects.map((sub, idx) => (
                      <td key={idx} className="p-6 text-center">
                        <div className="space-y-1">
                          <p className="font-bold text-indigo-700">{sub}</p>
                          <p className="text-sm text-gray-600">{sub === "PE" ? "Ground" : "Room 101"}</p>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}