"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users } from "lucide-react";

export default function AttendanceReport() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      <div className="text-center py-10">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Reports & Analytics
        </h1>
        <p className="text-3xl text-gray-700 mt-6">Real-time Insights • Data-Driven Decisions</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <Card className="border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-cyan-50 text-center">
          <CardHeader><Users className="w-16 h-16 mx-auto text-teal-600" /></CardHeader>
          <CardContent><p className="text-6xl font-bold text-teal-700">96.8%</p><p className="text-xl mt-2">Overall Attendance</p></CardContent>
        </Card>
        <Card className="border-2 border-green-300 text-center"><CardHeader><TrendingUp className="w-16 h-16 mx-auto text-green-600" /></CardHeader><CardContent><p className="text-6xl font-bold text-green-700">+2.4%</p><p className="text-xl mt-2">This Month</p></CardContent></Card>
        <Card className="border-2 border-orange-300 text-center"><CardContent><p className="text-6xl font-bold text-orange-700">12</p><p className="text-xl mt-2">Chronic Absentees</p></CardContent></Card>
        <Card className="border-2 border-purple-300 text-center"><CardContent><p className="text-6xl font-bold text-purple-700">1,840</p><p className="text-xl mt-2">Students Present Today</p></CardContent></Card>
      </div>

      <Card className="border-2 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <CardTitle className="text-3xl">Class-wise Attendance (Today)</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          {["10-A", "10-B", "11-A", "12-Commerce"].map((cls) => (
            <div key={cls} className="space-y-3">
              <div className="flex justify-between text-lg">
                <span className="font-bold">{cls}</span>
                <span>46 / 50</span>
              </div>
              <Progress value={92} className="h-10 bg-gray-200" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}