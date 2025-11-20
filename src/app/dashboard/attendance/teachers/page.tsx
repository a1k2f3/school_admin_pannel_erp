// app/(dashboard)/attendance/teachers/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, XCircle } from "lucide-react";

export default function TeacherAttendance() {
  const teachers = [
    { name: "Priya Sharma", status: "present" },
    { name: "Rahul Verma", status: "present" },
    { name: "Anita Desai", status: "absent" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <h1 className="text-4xl font-bold text-purple-700">Teacher Attendance</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teachers.map((t) => (
          <Card key={t.name} className={`border-2 ${t.status === "present" ? "border-green-200" : "border-red-200"}`}>
            <CardContent className="pt-8 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarFallback className={t.status === "present" ? "bg-green-600 text-white text-3xl" : "bg-red-600 text-white text-3xl"}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <p className="text-2xl font-bold">{t.name}</p>
              {t.status === "present" ? (
                <div className="flex items-center justify-center gap-2 mt-4 text-green-600">
                  <CheckCircle2 className="w-8 h-8" />
                  <span className="text-xl font-bold">Present</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 mt-4 text-red-600">
                  <XCircle className="w-8 h-8" />
                  <span className="text-xl font-bold">Absent</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}