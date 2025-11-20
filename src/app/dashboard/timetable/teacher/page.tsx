"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeacherTimetable() {
  const teacher = { name: "Priya Sharma", subject: "Mathematics", classes: "10-A, 10-B, 11-A" };

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      <div className="text-center">
        <Avatar className="w-32 h-32 mx-auto">
          <AvatarFallback className="text-4xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">PS</AvatarFallback>
        </Avatar>
        <h1 className="text-5xl font-bold text-purple-700 mt-6">{teacher.name}</h1>
        <p className="text-2xl text-gray-600">{teacher.subject} Teacher • {teacher.classes}</p>
      </div>

      <Card className="border-2">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
          <CardTitle className="text-3xl">Weekly Teaching Schedule</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-6 gap-4 text-center">
            {["Time", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
              <div key={day} className="font-bold text-lg p-4 bg-gray-100 rounded-xl">{day}</div>
            ))}
            <div className="font-bold">8:00-9:00</div>
            <div className="p-4 bg-purple-100 rounded-xl font-bold">10-A</div>
            <div className="p-4 bg-purple-100 rounded-xl font-bold">10-B</div>
            <div className="p-4 bg-green-100 rounded-xl">Free</div>
            <div className="p-4 bg-purple-100 rounded-xl font-bold">11-A</div>
            <div className="p-4 bg-purple-100 rounded-xl font-bold">10-A</div>
            {/* More rows */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}