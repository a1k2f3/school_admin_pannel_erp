// app/(dashboard)/timetable/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Clock,
  Users,
  Zap,
  CheckCircle2,
  Download,
  School,
  UserCheck
} from "lucide-react";
import Link from "next/link";

export default function TimetableDashboard() {
  const stats = {
    classesCovered: 36,
    teachersAssigned: 68,
    totalPeriods: 1560,
    conflicts: 0,
    lastGenerated: "18 Nov 2025, 3:42 PM"
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      {/* Hero Header */}
      <div className="text-center py-12">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          School Timetable Management
        </h1>
        <p className="text-3xl text-gray-700 mt-6">Academic Year 2025–26 • Fully Automated & Conflict-Free</p>
      </div>

      {/* Live Status Banner */}
      <Card className="border-4 border-green-500 shadow-2xl bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="py-10 text-center">
          <div className="flex items-center justify-center gap-6">
            <CheckCircle2 className="w-20 h-20 text-green-600" />
            <div>
              <p className="text-5xl font-bold text-green-800">Timetable Active & Running</p>
              <p className="text-2xl text-gray-700 mt-2">
                Last Generated: <strong>{stats.lastGenerated}</strong>
              </p>
            </div>
            <Badge className="text-2xl px-8 py-3 bg-green-600">ZERO CONFLICTS</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <Card className="text-center border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <School className="w-16 h-16 mx-auto text-blue-600" />
            <CardTitle className="text-2xl mt-4 text-blue-800">Classes Covered</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-blue-700">{stats.classesCovered}</p>
            <p className="text-lg text-gray-600 mt-2">Class 1 to 12</p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader>
            <Users className="w-16 h-16 mx-auto text-purple-600" />
            <CardTitle className="text-2xl mt-4 text-purple-800">Teachers Assigned</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-purple-700">{stats.teachersAssigned}</p>
            <p className="text-lg text-gray-600 mt-2">100% Coverage</p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-orange-300 bg-gradient-to-br from-orange-50 to-red-50">
          <CardHeader>
            <Clock className="w-16 h-16 mx-auto text-orange-600" />
            <CardTitle className="text-2xl mt-4 text-orange-800">Weekly Periods</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-orange-700">{stats.totalPeriods}</p>
            <p className="text-lg text-gray-600 mt-2">Perfectly Balanced</p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <Zap className="w-16 h-16 mx-auto text-green-600" />
            <CardTitle className="text-2xl mt-4 text-green-800">Auto Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-green-700">AI Powered</p>
            <Badge className="mt-4 text-lg px-6 bg-green-600">7 Seconds</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access – Massive Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Link href="/dashboard/timetable/class">
          <Button className="w-full h-48 text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex flex-col gap-6 rounded-3xl shadow-2xl">
            <School className="w-24 h-24" />
            View Class Timetable
          </Button>
        </Link>

        <Link href="/dashboard/timetable/teacher">
          <Button className="w-full h-48 text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex flex-col gap-6 rounded-3xl shadow-2xl">
            <UserCheck className="w-24 h-24" />
            Teacher Schedules
          </Button>
        </Link>

        <Link href="/dashboard/timetable/generate">
          <Button className="w-full h-48 text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 flex flex-col gap-6 rounded-3xl shadow-2xl">
            <Zap className="w-24 h-24" />
            Auto Generate New
          </Button>
        </Link>
      </div>

      {/* Final Celebration Banner */}
      <Card className="border-4 border-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardContent className="py-16 text-center">
          <Calendar className="w-32 h-32 mx-auto text-indigo-600 mb-8" />
          <h2 className="text-6xl font-bold text-indigo-800">
            Perfect Timetable Running Since Day 1
          </h2>
          <p className="text-3xl text-indigo-700 mt-6">
            No Manual Adjustments • Teachers Love It • Parents Happy
          </p>
          <div className="flex justify-center gap-8 mt-12">
            <Button size="lg" className="text-xl px-12 gap-4 bg-indigo-600 hover:bg-indigo-700">
              <Download className="w-8 h-8" /> Download Master Timetable (PDF)
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-12 gap-4 border-indigo-600 text-indigo-700">
              View Change Log
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}