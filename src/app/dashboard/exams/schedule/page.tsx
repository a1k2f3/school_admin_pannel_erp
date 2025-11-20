// app/(dashboard)/exams/schedule/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, FileText, Plus } from "lucide-react";
import Link from "next/link";

export default function ExamSchedule() {
  const exams = [
    { name: "Half Yearly Exam", from: "10 Dec 2025", to: "20 Dec 2025", status: "upcoming" },
    { name: "Unit Test 2", from: "15 Nov 2025", to: "18 Nov 2025", status: "completed" },
    { name: "Pre-Board Exam", from: "05 Jan 2026", to: "18 Jan 2026", status: "scheduled" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-indigo-700">Exam Schedule</h1>
          <p className="text-xl text-gray-600 mt-3">Academic Year 2025-26</p>
        </div>
        <Link href="/dashboard/exams/schedule/create">
          <Button size="lg" className="gap-3 bg-gradient-to-r from-indigo-600 to-purple-600">
            <Plus className="w-6 h-6" /> Create New Exam
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {exams.map((exam) => (
          <Card key={exam.name} className={`border-2 ${exam.status === "upcoming" ? "border-purple-300" : exam.status === "completed" ? "border-green-300" : "border-blue-300"} hover:shadow-2xl transition-all`}>
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardTitle className="text-2xl flex items-center gap-3">
                <FileText className="w-8 h-8 text-indigo-700" />
                {exam.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-5">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="font-semibold">From: {exam.from}</p>
                  <p className="font-semibold">To: {exam.to}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-purple-600" />
                <span className="text-lg">10 Days Duration</span>
              </div>
              <Badge className={`text-lg px-6 py-2 ${exam.status === "upcoming" ? "bg-purple-600" : exam.status === "completed" ? "bg-green-600" : "bg-blue-600"}`}>
                {exam.status.toUpperCase()}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}