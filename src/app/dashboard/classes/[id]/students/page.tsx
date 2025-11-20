// app/(dashboard)/classes/[id]/students/page.tsx
"use client";

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Search, Users, UserCheck, Filter } from "lucide-react";
import Link from "next/link";

export default function ClassStudents({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // No more console error!

  const students = [
    { roll: "01", name: "Aarav Sharma", section: "A", status: "Active", attendance: "98%" },
    { roll: "02", name: "Diya Patel", section: "A", status: "Active", attendance: "95%" },
    { roll: "03", name: "Vihaan Reddy", section: "B", status: "Active", attendance: "97%" },
    { roll: "04", name: "Ananya Gupta", section: "B", status: "Active", attendance: "99%" },
    { roll: "05", name: "Ishaan Kumar", section: "C", status: "Active", attendance: "94%" },
    { roll: "06", name: "Saanvi Singh", section: "C", status: "Active", attendance: "96%" },
    { roll: "07", name: "Arjun Mehta", section: "D", status: "Active", attendance: "92%" },
    { roll: "08", name: "Aarohi Joshi", section: "D", status: "Active", attendance: "98%" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <Link href={`/dashboard/classes/${id}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-blue-700">Class {id} - Students</h1>
            <p className="text-gray-600 mt-1">Total: <strong>156</strong> Students • 4 Sections</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" /> Filter by Section
          </Button>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Users className="w-4 h-4" /> Add Student
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search students by name or roll no..."
          className="pl-11 h-12 text-base"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-green-700">Present Today</CardTitle></CardHeader>
          <CardContent><p className="text-4xl font-bold text-green-600">148</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-orange-700">On Leave</CardTitle></CardHeader>
          <CardContent><p className="text-4xl font-bold text-orange-600">6</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-purple-700">Boys</CardTitle></CardHeader>
          <CardContent><p className="text-4xl font-bold text-purple-600">82</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-pink-700">Girls</CardTitle></CardHeader>
          <CardContent><p className="text-4xl font-bold text-pink-600">74</p></CardContent>
        </Card>
      </div>

      {/* Students Table */}
      <Card className="border-2">
        <CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">Roll No</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.roll} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-semibold text-blue-700">{student.roll}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                          {student.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-lg">{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-base px-4 py-1">
                      Section {student.section}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-green-600">{student.attendance}</span>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-600 text-white">Active</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`/dashboard/students/${student.roll}`}>
                      <Button size="sm" variant="ghost">View Profile</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardHeader>
      </Card>
    
    </div>
  );
}