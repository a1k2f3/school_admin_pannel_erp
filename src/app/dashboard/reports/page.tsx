// app/(dashboard)/reports/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  Users,
  IndianRupee,
  GraduationCap,
  BookOpen,
  Bus,
  Home,
  BarChart3,
  Download,
  Trophy
} from "lucide-react";
import Link from "next/link";

export default function ReportsDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 p-6">
      {/* Hero Header */}
      <div className="text-center py-12">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Reports & Analytics
        </h1>
        <p className="text-4xl text-gray-700 mt-8">Academic Year 2025–26 • Data That Drives Excellence</p>
        <Badge className="text-2xl px-10 py-4 mt-8 bg-gradient-to-r from-purple-600 to-pink-600">
          Live • Updated Every Hour
        </Badge>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <Card className="text-center border-4 border-indigo-400 bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardHeader><Users className="w-16 h-16 mx-auto text-indigo-600" /></CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-indigo-700">1,840</p>
            <p className="text-xl mt-2">Total Students</p>
          </CardContent>
        </Card>

        <Card className="text-center border-4 border-green-400 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader><TrendingUp className="w-16 h-16 mx-auto text-green-600" /></CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-green-700">96.8%</p>
            <p className="text-xl mt-2">Attendance</p>
          </CardContent>
        </Card>

        <Card className="text-center border-4 border-emerald-400 bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader><IndianRupee className="w-16 h-16 mx-auto text-emerald-600" /></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-emerald-700">₹8.42 Cr</p>
            <p className="text-xl mt-2">Fees Collected</p>
          </CardContent>
        </Card>

        <Card className="text-center border-4 border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader><Trophy className="w-16 h-16 mx-auto text-purple-600" /></CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-purple-700">97.4%</p>
            <p className="text-xl mt-2">Board Result</p>
          </CardContent>
        </Card>

        <Card className="text-center border-4 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50">
          <CardHeader><BookOpen className="w-16 h-16 mx-auto text-amber-600" /></CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-amber-700">12.4K</p>
            <p className="text-xl mt-2">Library Books</p>
          </CardContent>
        </Card>

        <Card className="text-center border-4 border-cyan-400 bg-gradient-to-br from-cyan-50 to-blue-50">
          <CardHeader><Bus className="w-16 h-16 mx-auto text-cyan-600" /></CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-cyan-700">1,480</p>
            <p className="text-xl mt-2">Transport Users</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access – Massive Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <Link href="/dashboard/reports/attendance">
          <Button className="w-full h-48 text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 flex flex-col gap-6 rounded-3xl shadow-2xl">
            <Users className="w-24 h-24" />
            Attendance Report
          </Button>
        </Link>

        <Link href="/dashboard/reports/fees">
          <Button className="w-full h-48 text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 flex flex-col gap-6 rounded-3xl shadow-2xl">
            <IndianRupee className="w-24 h-24" />
            Fees Collection
          </Button>
        </Link>

        <Link href="/dashboard/reports/academic">
          <Button className="w-full h-48 text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex flex-col gap-6 rounded-3xl shadow-2xl">
            <GraduationCap className="w-24 h-24" />
            Academic Results
          </Button>
        </Link>

        <Link href="/dashboard/reports/admission">
          <Button className="w-full h-48 text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 flex flex-col gap-6 rounded-3xl shadow-2xl">
            <TrendingUp className="w-24 h-24" />
            Admission Report
          </Button>
        </Link>

        <Link href="/dashboard/reports/library">
          <Button className="w-full h-48 text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 flex flex-col gap-6 rounded-3xl shadow-2xl">
            <BookOpen className="w-24 h-24" />
            Library Report
          </Button>
        </Link>

        <Link href="/dashboard/reports/custom">
          <Button className="w-full h-48 text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 flex flex-col gap-6 rounded-3xl shadow-2xl">
            <BarChart3 className="w-24 h-24" />
            Custom Report Builder
          </Button>
        </Link>
      </div>

      {/* Final Celebration Banner */}
      <Card className="border-4 border-purple-600 bg-gradient-to-r from-purple-50 to-pink-50">
        <CardContent className="py-20 text-center">
          <Trophy className="w-40 h-40 mx-auto text-purple-600 mb-10" />
          <h2 className="text-7xl font-bold text-purple-800">
            #1 Ranked School in Delhi-NCR 2025
          </h2>
          <p className="text-4xl text-purple-700 mt-8">
            Thanks to Data-Driven Decisions Powered by Your ERP
          </p>
          <div className="flex justify-center gap-10 mt-16">
            <Button size="lg" className="text-2xl px-16 py-8 gap-6 bg-purple-600 hover:bg-purple-700">
              <Download className="w-10 h-10" /> Download Annual Report (PDF)
            </Button>
            <Button size="lg" variant="outline" className="text-2xl px-16 py-8 gap-6 border-purple-600 text-purple-700">
              Share with Management
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}