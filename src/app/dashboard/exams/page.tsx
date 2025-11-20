// app/(dashboard)/exams/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Trophy,
  FileText,
  Upload,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Plus
} from "lucide-react";
import Link from "next/link";

export default function ExamsDashboard() {
  const currentExam = {
    name: "Half Yearly Examination 2025",
    from: "15 Dec 2025",
    to: "22 Dec 2025",
    daysLeft: 26,
    status: "Scheduled"
  };

  const stats = {
    totalExams: 12,
    upcoming: 3,
    completed: 9,
    resultsPublished: 7,
    reportCardsGenerated: 6
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      {/* Hero Header */}
      <div className="text-center py-10">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Examinations Management
        </h1>
        <p className="text-2xl text-gray-700 mt-6">Academic Year 2025–26 • Complete Exam Control Center</p>
      </div>

      {/* Current Active Exam Banner */}
      <Card className="border-4 border-indigo-500 shadow-2xl bg-gradient-to-r from-indigo-50 to-purple-50">
        <CardHeader className="text-center">
          <Badge className="text-lg px-6 py-2 mb-4 bg-indigo-600">CURRENT EXAM</Badge>
          <CardTitle className="text-4xl font-bold text-indigo-800">{currentExam.name}</CardTitle>
          <div className="flex items-center justify-center gap-6 mt-4 text-xl">
            <div className="flex items-center gap-2">
              <Calendar className="w-8 h-8 text-indigo-600" />
              <span>{currentExam.from} → {currentExam.to}</span>
            </div>
            <div className="flex items-center gap-2 text-red-600 font-bold">
              <Clock className="w-8 h-8" />
              <span>{currentExam.daysLeft} Days Left</span>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <Card className="text-center border-2 border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardHeader><CardTitle className="text-indigo-800">Total Exams</CardTitle></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-indigo-700">{stats.totalExams}</p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-orange-300">
          <CardHeader><CardTitle className="text-orange-800">Upcoming</CardTitle></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-orange-700">{stats.upcoming}</p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-green-300">
          <CardHeader><CardTitle className="text-green-800">Completed</CardTitle></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-green-700">{stats.completed}</p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-purple-300">
          <CardHeader><CardTitle className="text-purple-800">Results Published</CardTitle></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-purple-700">{stats.resultsPublished}</p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-pink-300">
          <CardHeader><CardTitle className="text-pink-800">Report Cards</CardTitle></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-pink-700">{stats.reportCardsGenerated}</p>
          </CardContent>
        </Card>

        <Card className="text-center border-2 border-emerald-300">
          <CardHeader><CardTitle className="text-emerald-800">Pass Rate</CardTitle></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-emerald-700">98.7%</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions – Big Beautiful Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Link href="/dashboard/exams/schedule">
          <Button className="w-full h-40 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 flex flex-col gap-4">
            <Calendar className="w-16 h-16" />
            Exam Schedule
          </Button>
        </Link>

        <Link href="/dashboard/exams/schedule/create">
          <Button className="w-full h-40 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex flex-col gap-4">
            <Plus className="w-16 h-16" />
            Create Exam
          </Button>
        </Link>

        <Link href="/dashboard/exams/marks/entry">
          <Button className="w-full h-40 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 flex flex-col gap-4">
            <FileText className="w-16 h-16" />
            Enter Marks
          </Button>
        </Link>

        <Link href="/dashboard/exams/results/publish">
          <Button className="w-full h-40 text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 flex flex-col gap-4">
            <Trophy className="w-16 h-16" />
            Publish Results
          </Button>
        </Link>

        <Link href="/dashboard/exams/results/view">
          <Button className="w-full h-40 text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 flex flex-col gap-4">
            <TrendingUp className="w-16 h-16" />
            View Results
          </Button>
        </Link>

        <Link href="/dashboard/exams/results/report-cards">
          <Button className="w-full h-40 text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 flex flex-col gap-4">
            <FileText className="w-16 h-16" />
            Report Cards
          </Button>
        </Link>
      </div>

      {/* Final Banner */}
      <Card className="border-4 border-purple-600 bg-gradient-to-r from-purple-50 to-pink-50 text-center">
        <CardContent className="py-16">
          <Trophy className="w-32 h-32 mx-auto text-purple-600 mb-6" />
          <h2 className="text-5xl font-bold text-purple-800">
            98.7% Pass Rate This Year
          </h2>
          <p className="text-3xl text-purple-700 mt-4">Highest in School History!</p>
          <Button size="lg" className="mt-10 text-xl px-12 gap-4 bg-purple-600 hover:bg-purple-700">
            <Upload className="w-8 h-8" /> Generate Annual Performance Report
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}