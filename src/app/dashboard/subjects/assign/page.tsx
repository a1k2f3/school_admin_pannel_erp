// app/(dashboard)/subjects/assign/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, UserCheck, BookOpen } from "lucide-react";
import Link from "next/link";

export default function AssignTeachers() {
  const classes = ["Class 10", "Class 11", "Class 12"];
  const subjects = ["Mathematics", "Physics", "Chemistry", "Biology", "English"];
  const teachers = [
    { id: "T001", name: "Priya Sharma", subject: "Mathematics" },
    { id: "T002", name: "Rahul Verma", subject: "Physics" },
    { id: "T003", name: "Anita Desai", subject: "English" },
    { id: "T004", name: "Neha Gupta", subject: "Computer Science" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/subjects">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-purple-700">Assign Teachers to Subjects</h1>
          <p className="text-gray-600 mt-1">Link teachers with subjects for each class</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Select Class</CardTitle>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Teachers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teachers.map((t) => (
                <div key={t.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.subject}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="border-2">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <CardTitle className="text-2xl flex items-center gap-3">
                <BookOpen className="w-8 h-8" /> Subject Assignment for Class 10
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {subjects.map((sub) => (
                <div key={sub} className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-600 rounded-full">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-indigo-800">{sub}</p>
                      <p className="text-sm text-gray-600">6 periods/week</p>
                    </div>
                  </div>
                  <Select defaultValue="Priya Sharma">
                    <SelectTrigger className="w-64">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {teachers.map((t) => (
                        <SelectItem key={t.id} value={t.name}>
                          <div className="flex items-center gap-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="text-xs">
                                {t.name.split(" ").map(n => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            {t.name} ({t.subject})
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
              <div className="flex justify-end pt-6">
                <Button size="lg" className="gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  <UserCheck className="w-6 h-6" /> Save All Assignments
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}