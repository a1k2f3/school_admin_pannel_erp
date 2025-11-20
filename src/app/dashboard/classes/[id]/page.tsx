// app/(dashboard)/classes/[id]/page.tsx
"use client";

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, Users, BookOpen, Calendar, Edit } from "lucide-react";
import Link from "next/link";

export default function ClassDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // This fixes the Promise error
  const className = `Class ${id}`;

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/classes">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-blue-700">{className}</h1>
            <p className="text-gray-600">Academic Year 2025-26</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2">
          <Edit className="w-4 h-4" /> Edit Class
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="border-2 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-blue-700 flex items-center gap-2">
              <Users className="w-5 h-5" /> Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-blue-600">156</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-green-700">Sections</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-green-600">4</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-purple-700 flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-purple-600">8</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-orange-700">Class Teacher</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">Mrs. Priya Singh</p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <Tabs defaultValue="sections" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 rounded-xl h-14 bg-gray-100 dark:bg-gray-800">
          <TabsTrigger value="sections" className="text-sm font-medium">
            Sections (A, B, C, D)
          </TabsTrigger>
          <TabsTrigger value="students" className="text-sm font-medium">
            Students
          </TabsTrigger>
          <TabsTrigger value="subjects" className="text-sm font-medium">
            Subjects
          </TabsTrigger>
          <TabsTrigger value="timetable" className="text-sm font-medium">
            Timetable
          </TabsTrigger>
        </TabsList>

        {/* Sections Tab */}
        <TabsContent value="sections" className="mt-6">
          <Link href={`/dashboard/classes/${id}/sections`}>
            <Button size="lg" className="w-full h-40 text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Manage Sections
            </Button>
          </Link>
        </TabsContent>

        {/* Students Tab */}
        <TabsContent value="students" className="mt-6">
          <Link href={`/dashboard/classes/${id}/students`}>
            <Button size="lg" className="w-full h-40 text-xl font-semibold bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
              View All Students
            </Button>
          </Link>
        </TabsContent>

        {/* Subjects Tab */}
        <TabsContent value="subjects" className="mt-6">
          <Link href={`/dashboard/classes/${id}/subjects`}>
            <Button size="lg" className="w-full h-40 text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Assigned Subjects & Teachers
            </Button>
          </Link>
        </TabsContent>

        {/* Timetable Tab */}
        <TabsContent value="timetable" className="mt-6">
          <Link href={`/dashboard/classes/${id}/timetable`}>
            <Button size="lg" className="w-full h-40 text-xl font-semibold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
              View Weekly Timetable
            </Button>
          </Link>
        </TabsContent>
      </Tabs>
    </div>
  );
}