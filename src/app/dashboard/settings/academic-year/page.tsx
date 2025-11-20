"use client";

import {Button} from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Calendar } from "lucide-react";

export default function AcademicYear() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 p-8">
      <h1 className="text-6xl font-bold text-center text-emerald-700">Academic Year Settings</h1>

      <Card className="border-4 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center py-16">
          <Calendar className="w-32 h-32 mx-auto mb-6" />
          <CardTitle className="text-5xl">Current Session</CardTitle>
          <p className="text-4xl mt-6">2025 – 2026</p>
          <Badge className="text-2xl px-12 py-4 mt-8 bg-green-600">ACTIVE</Badge>
        </CardHeader>
        <CardContent className="p-12 space-y-10">
          <div className="grid grid-cols-2 gap-10 text-center">
            <div><p className="text-2xl text-gray-600">Session Start</p><p className="text-5xl font-bold text-emerald-700 mt-4">01 Apr 2025</p></div>
            <div><p className="text-2xl text-gray-600">Session End</p><p className="text-5xl font-bold text-emerald-700 mt-4">31 Mar 2026</p></div>
          </div>
          <div className="text-center pt-10">
            <Button size="lg" className="text-2xl px-16 py-8 bg-gradient-to-r from-emerald-600 to-teal-600">
              Create New Academic Year 2026-27
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}