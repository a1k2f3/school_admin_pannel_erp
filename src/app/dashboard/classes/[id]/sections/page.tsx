// app/(dashboard)/classes/[id]/sections/page.tsx
"use client";

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck } from "lucide-react";
import Link from "next/link";

export default function ClassSections({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // This fixes the Promise error

  const sections = [
    { name: "A", students: 39, incharge: "Mr. Rahul Verma" },
    { name: "B", students: 38, incharge: "Ms. Anita Desai" },
    { name: "C", students: 40, incharge: "Mrs. Priya Sharma" },
    { name: "D", students: 39, incharge: "Mr. Karan Singh" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Class {id} - Sections</h1>
          <p className="text-gray-600 mt-2">Click on any section to view students and details</p>
        </div>
        <Link href={`/dashboard/classes/${id}`}>
          <Button variant="outline" size="lg" className="gap-2">
            <UserCheck className="w-5 h-5" /> Back to Class Overview
          </Button>
        </Link>
      </div>

      {/* Sections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section) => (
          <Link
            key={section.name}
            href={`/dashboard/classes/${id}/students?section=${section.name}`}
            className="block group"
          >
            <Card className="h-full p-10 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 hover:border-blue-600 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800">
              <CardHeader className="pb-4">
                <div className="mx-auto w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                  <span className="text-5xl font-bold text-white">
                    {id}-{section.name}
                  </span>
                </div>
                <CardTitle className="text-3xl font-bold text-blue-800">
                  Section {section.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <Users className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="text-4xl font-bold text-blue-700">{section.students}</p>
                    <p className="text-sm text-gray-600">Students</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500">Section Incharge</p>
                  <p className="font-semibold text-gray-800">{section.incharge}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <p className="text-5xl font-bold">156</p>
        <p className="text-2xl mt-2 opacity-90">Total Students in Class {id}</p>
        <p className="mt-4 text-lg opacity-80">All sections are actively managed</p>
      </div>
    </div>
  );
}