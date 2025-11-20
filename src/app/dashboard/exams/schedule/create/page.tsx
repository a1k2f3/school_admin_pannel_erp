"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateExam() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/exams/schedule"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-4xl font-bold text-indigo-700">Create New Exam Schedule</h1>
      </div>

      <Card className="border-2 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <CardTitle className="text-3xl">Exam Details</CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2"><Label className="text-lg">Exam Name</Label><Input placeholder="e.g. Final Term Exam" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Academic Year</Label><Input defaultValue="2025-26" className="h-14 text-lg" /></div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2"><Label className="text-lg">Start Date</Label><Input type="date" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">End Date</Label><Input type="date" className="h-14 text-lg" /></div>
          </div>
          <div className="flex justify-end gap-4 pt-6">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 px-12">
              Create Exam Schedule
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}