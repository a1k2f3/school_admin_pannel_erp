"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, CheckCircle2, Clock } from "lucide-react";

export default function GenerateTimetable() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Auto Generate Timetable
        </h1>
        <p className="text-2xl text-gray-700 mt-6">AI-Powered • Zero Conflicts • Ready in Seconds</p>
      </div>

      <Card className="border-4 border-orange-500 shadow-2xl">
        <CardHeader className="text-center bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <Zap className="w-20 h-20 mx-auto mb-4" />
          <CardTitle className="text-4xl">Generate Complete School Timetable</CardTitle>
        </CardHeader>
        <CardContent className="p-12 space-y-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-8 text-2xl">
              <div className="text-center">
                <p className="text-6xl font-bold text-orange-600">12</p>
                <p>Classes</p>
              </div>
              <div className="text-center">
                <p className="text-6xl font-bold text-red-600">70</p>
                <p>Teachers</p>
              </div>
              <div className="text-center">
                <p className="text-6xl font-bold text-purple-600">40</p>
                <p>Periods/Week</p>
              </div>
            </div>

            <Badge className="text-2xl px-10 py-4 bg-green-600">
              <CheckCircle2 className="w-8 h-8 mr-3" />
              No Teacher Conflicts • Balanced Load • PE & Labs Scheduled
            </Badge>
          </div>

          <div className="flex justify-center gap-8">
            <Button size="lg" className="text-2xl px-16 py-8 gap-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
              <Zap className="w-12 h-12" />
              Generate Now (7 Seconds)
            </Button>
          </div>

          <div className="text-center mt-10">
            <p className="text-xl text-gray-600">Last generated: 18 Nov 2025 • 1560 periods assigned</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}