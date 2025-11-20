// app/(dashboard)/classes/[id]/timetable/page.tsx
"use client";

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, Download, Printer } from "lucide-react";
import Link from "next/link";

export default function ClassTimetable({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // No console error!

  const timetable = [
    {
      day: "Monday",
      periods: [
        { time: "8:00 - 9:00", subject: "Mathematics", teacher: "Priya Sharma", room: "Room 101" },
        { time: "9:00 - 10:00", subject: "Science", teacher: "Rahul Verma", room: "Lab 1" },
        { time: "10:15 - 11:15", subject: "English", teacher: "Anita Desai", room: "Room 102" },
        { time: "11:30 - 12:30", subject: "Hindi", teacher: "Sunita Kumari", room: "Room 103" },
        { time: "1:00 - 2:00", subject: "Social Studies", teacher: "Karan Singh", room: "Room 104" },
        { time: "2:00 - 3:00", subject: "Computer", teacher: "Neha Gupta", room: "Computer Lab" },
      ],
    },
    {
      day: "Tuesday",
      periods: [
        { time: "8:00 - 9:00", subject: "English", teacher: "Anita Desai", room: "Room 102" },
        { time: "9:00 - 10:00", subject: "Mathematics", teacher: "Priya Sharma", room: "Room 101" },
        { time: "10:15 - 11:15", subject: "Hindi", teacher: "Sunita Kumari", room: "Room 103" },
        { time: "11:30 - 12:30", subject: "Science", teacher: "Rahul Verma", room: "Lab 1" },
        { time: "1:00 - 2:00", subject: "Physical Edu", teacher: "Coach Vikram", room: "Ground" },
        { time: "2:00 - 3:00", subject: "Sanskrit", teacher: "Pandit Rajesh", room: "Room 105" },
      ],
    },
    {
      day: "Wednesday",
      periods: [
        { time: "8:00 - 9:00", subject: "Science", teacher: "Rahul Verma", room: "Lab 1" },
        { time: "9:00 - 10:00", subject: "Social Studies", teacher: "Karan Singh", room: "Room 104" },
        { time: "10:15 - 11:15", subject: "Mathematics", teacher: "Priya Sharma", room: "Room 101" },
        { time: "11:30 - 12:30", subject: "English", teacher: "Anita Desai", room: "Room 102" },
        { time: "1:00 - 2:00", subject: "Computer", teacher: "Neha Gupta", room: "Computer Lab" },
        { time: "2:00 - 3:00", subject: "Hindi", teacher: "Sunita Kumari", room: "Room 103" },
      ],
    },
    {
      day: "Thursday",
      periods: [
        { time: "8:00 - 9:00", subject: "Hindi", teacher: "Sunita Kumari", room: "Room 103" },
        { time: "9:00 - 10:00", subject: "English", teacher: "Anita Desai", room: "Room 102" },
        { time: "10:15 - 11:15", subject: "Science", teacher: "Rahul Verma", room: "Lab 1" },
        { time: "11:30 - 12:30", subject: "Mathematics", teacher: "Priya Sharma", room: "Room 101" },
        { time: "1:00 - 2:00", subject: "Sanskrit", teacher: "Pandit Rajesh", room: "Room 105" },
        { time: "2:00 - 3:00", subject: "Physical Edu", teacher: "Coach Vikram", room: "Ground" },
      ],
    },
    {
      day: "Friday",
      periods: [
        { time: "8:00 - 9:00", subject: "Mathematics", teacher: "Priya Sharma", room: "Room 101" },
        { time: "9:00 - 10:00", subject: "Hindi", teacher: "Sunita Kumari", room: "Room 103" },
        { time: "10:15 - 11:15", subject: "Social Studies", teacher: "Karan Singh", room: "Room 104" },
        { time: "11:30 - 12:30", subject: "Computer", teacher: "Neha Gupta", room: "Computer Lab" },
        { time: "1:00 - 2:00", subject: "English", teacher: "Anita Desai", room: "Room 102" },
        { time: "2:00 - 3:00", subject: "Science", teacher: "Rahul Verma", room: "Lab 1" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <Link href={`/dashboard/classes/${id}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-blue-700">Class {id} - Weekly Timetable</h1>
            <p className="text-gray-600 mt-1">Academic Year 2025-26 • 40 Periods per Week</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" /> Export PDF
          </Button>
          <Button variant="outline" className="gap-2">
            <Printer className="w-4 h-4" /> Print
          </Button>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Calendar className="w-5 h-5" /> Edit Timetable
          </Button>
        </div>
      </div>

      {/* Timetable Card */}
      <Card className="overflow-hidden border-2 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle className="text-3xl flex items-center gap-3">
            <Clock className="w-10 h-10" />
            Weekly Class Schedule
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-bold text-gray-800 w-32">Day</TableHead>
                  <TableHead className="text-center"><Badge variant="secondary">8:00 - 9:00</Badge></TableHead>
                  <TableHead className="text-center"><Badge variant="secondary">9:00 - 10:00</Badge></TableHead>
                  <TableHead className="text-center"><Badge variant="secondary">10:15 - 11:15</Badge></TableHead>
                  <TableHead className="text-center"><Badge variant="secondary">11:30 - 12:30</Badge></TableHead>
                  <TableHead className="text-center"><Badge variant="secondary">1:00 - 2:00</Badge></TableHead>
                  <TableHead className="text-center"><Badge variant="secondary">2:00 - 3:00</Badge></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timetable.map((day) => (
                  <TableRow key={day.day} className="hover:bg-blue-50 transition-colors">
                    <TableCell className="font-bold text-lg text-blue-800 bg-gray-50">
                      {day.day}
                    </TableCell>
                    {day.periods.map((period, idx) => (
                      <TableCell key={idx} className="text-center p-4">
                        <div className="space-y-1">
                          <p className="font-semibold text-indigo-700">{period.subject}</p>
                          <p className="text-sm text-gray-600">{period.teacher}</p>
                          <Badge variant="outline" className="text-xs">{period.room}</Badge>
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-2">
        <h3 className="font-bold text-xl mb-4 text-indigo-800">Quick Info</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span>Core Subject</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-600 rounded"></div>
            <span>Lab / Practical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-600 rounded"></div>
            <span>Activity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-600 rounded"></div>
            <span>Language</span>
          </div>
        </div>
      </div>
    </div>
  );
}