// app/(dashboard)/attendance/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  UserCheck, 
  UserX, 
  Calendar, 
  TrendingUp, 
  AlertCircle,
  Clock,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function AttendanceDashboard() {
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const stats = {
    totalStudents: 1560,
    presentToday: 1482,
    absentToday: 78,
    attendanceRate: 94.9,
    teachersPresent: 68,
    teachersTotal: 70
  };

  const recentAbsentees = [
    { name: "Vihaan Reddy", class: "10-A", reason: "Fever" },
    { name: "Rohan Mehta", class: "9-B", reason: "Family Function" },
    { name: "Sia Kapoor", class: "11-C", reason: "Medical" },
  ];

  const topClasses = [
    { class: "10-A", percentage: 99.2 },
    { class: "12-B", percentage: 98.7 },
    { class: "8-C", percentage: 98.1 },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-5xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Attendance Overview
          </h1>
          <p className="text-xl text-gray-600 mt-3 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-blue-600" />
            {today}
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard/attendance/students">
            <Button size="lg" className="gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <UserCheck className="w-6 h-6" />
              Take Student Attendance
            </Button>
          </Link>
          <Link href="/dashboard/attendance/teachers">
            <Button size="lg" variant="outline" className="gap-3 border-purple-600 text-purple-700 hover:bg-purple-50">
              <Users className="w-6 h-6" />
              Teacher Attendance
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-green-800">Present Today</CardTitle>
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-green-700">{stats.presentToday}</p>
            <p className="text-sm text-gray-600 mt-2">out of {stats.totalStudents} students</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-red-800">Absent Today</CardTitle>
            <UserX className="w-10 h-10 text-red-600" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-red-700">{stats.absentToday}</p>
            <Progress value={stats.absentToday} className="mt-3 h-3" />
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-blue-800">Overall Rate</CardTitle>
            <TrendingUp className="w-10 h-10 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-blue-700">{stats.attendanceRate}%</p>
            <Badge className="mt-3 text-lg px-4 py-1 bg-green-600">Excellent</Badge>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-purple-800">Teachers Present</CardTitle>
            <Users className="w-10 h-10 text-purple-600" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-purple-700">
              {stats.teachersPresent}/{stats.teachersTotal}
            </p>
            <p className="text-sm text-gray-600 mt-2">97.1% Staff Present</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions + Recent Absentees */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Clock className="w-7 h-7 text-orange-600" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Link href="/dashboard/attendance/students/today">
              <Button className="w-full h-24 text-lg font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                Today's Summary
              </Button>
            </Link>
            <Link href="/dashboard/attendance/students/absentees">
              <Button className="w-full h-24 text-lg font-semibold bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700">
                View Absentees
              </Button>
            </Link>
            <Link href="/dashboard/attendance/students/reports">
              <Button className="w-full h-24 text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                Monthly Reports
              </Button>
            </Link>
            <Link href="/dashboard/attendance/teachers">
              <Button className="w-full h-24 text-lg font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700">
                Teacher Attendance
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Recent Absentees */}
        <Card className="border-2 border-red-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3 text-red-700">
              <AlertCircle className="w-7 h-7" />
              Recent Absentees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAbsentees.map((student, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-red-600 text-white">
                        {student.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-lg">{student.name}</p>
                      <p className="text-sm text-gray-600">{student.class} • {student.reason}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="border-red-600 text-red-600">
                    Notify Parent
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Classes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-green-700">Top Performing Classes (This Month)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {topClasses.map((cls, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    #{i + 1}
                  </div>
                  <div>
                    <p className="text-xl font-bold">{cls.class}</p>
                    <p className="text-sm text-gray-600">Highest attendance this month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-600">{cls.percentage}%</p>
                  <Progress value={cls.percentage} className="w-32 mt-2 h-3" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}