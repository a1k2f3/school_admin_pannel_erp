// app/(dashboard)/classes/[id]/subjects/page.tsx
"use client";

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, BookOpen, Clock, User } from "lucide-react";
import Link from "next/link";

export default function ClassSubjects({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // No more console error!

  const subjects = [
    { name: "Mathematics", teacher: "Priya Sharma", periods: 7, avatar: "PS" },
    { name: "Science", teacher: "Rahul Verma", periods: 6, avatar: "RV" },
    { name: "English", teacher: "Anita Desai", periods: 6, avatar: "AD" },
    { name: "Hindi", teacher: "Sunita Kumari", periods: 5, avatar: "SK" },
    { name: "Social Studies", teacher: "Karan Singh", periods: 5, avatar: "KS" },
    { name: "Computer Science", teacher: "Neha Gupta", periods: 4, avatar: "NG" },
    { name: "Sanskrit", teacher: "Pandit Rajesh", periods: 3, avatar: "PR" },
    { name: "Physical Education", teacher: "Coach Vikram", periods: 4, avatar: "CV" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/dashboard/classes/${id}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-blue-700">Class {id} - Subjects</h1>
            <p className="text-gray-600 mt-1">Total: <strong>8</strong> Subjects • Academic Year 2025-26</p>
          </div>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
          <BookOpen className="w-5 h-5" /> Assign New Subject
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="border-blue-200">
          <CardHeader className="pb-3 flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-full">
              <BookOpen className="w-6 h-6 text-blue-700" />
            </div>
            <CardTitle className="text-blue-700">Total Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-blue-600">8</p>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader className="pb-3 flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-full">
              <Clock className="w-6 h-6 text-green-700" />
            </div>
            <CardTitle className="text-green-700">Weekly Periods</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-green-600">40</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="pb-3 flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-full">
              <User className="w-6 h-6 text-purple-700" />
            </div>
            <CardTitle className="text-purple-700">Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-purple-600">8</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-orange-700">Core Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-orange-600">5</p>
          </CardContent>
        </Card>
      </div>

      {/* Subjects Table */}
      <Card className="overflow-hidden border-2">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b">
          <h2 className="text-2xl font-bold text-indigo-800 flex items-center gap-3">
            <BookOpen className="w-7 h-7" /> Subject Allocation & Teachers
          </h2>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Assigned Teacher</TableHead>
                <TableHead>Periods/Week</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((sub, index) => (
                <TableRow key={sub.name} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-bold text-gray-700">{index + 1}</TableCell>
                  <TableCell className="font-semibold text-lg text-indigo-700">
                    {sub.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 ring-2 ring-white shadow-md">
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-white font-medium">
                          {sub.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{sub.teacher}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="font-bold text-green-700">{sub.periods}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">
                      View Syllabus
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}