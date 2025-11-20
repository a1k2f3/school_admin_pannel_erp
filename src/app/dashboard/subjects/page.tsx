// app/(dashboard)/subjects/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Plus, Users, Clock } from "lucide-react";
import Link from "next/link";

const subjects = [
  { id: "MATH", name: "Mathematics", classes: "8–12", teachers: 5, periods: 35 },
  { id: "SCI", name: "Science", classes: "6–10", teachers: 6, periods: 32 },
  { id: "ENG", name: "English", classes: "1–12", teachers: 8, periods: 40 },
  { id: "HINDI", name: "Hindi", classes: "1–10", teachers: 6, periods: 30 },
  { id: "COMP", name: "Computer Science", classes: "6–12", teachers: 4, periods: 24 },
  { id: "PE", name: "Physical Education", classes: "1–12", teachers: 3, periods: 28 },
];

export default function SubjectsPage() {
  return (
    <div className="space-y-8 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-blue-700">Subjects</h1>
          <p className="text-gray-600 mt-2">Manage all academic subjects and assignments</p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/subjects/add">
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Plus className="w-5 h-5" /> Add Subject
            </Button>
          </Link>
          <Link href="/dashboard/subjects/assign">
            <Button variant="outline" className="gap-2 border-purple-600 text-purple-700 hover:bg-purple-50">
              <Users className="w-5 h-5" /> Assign Teachers
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((sub) => (
          <Card key={sub.id} className="hover:shadow-xl transition-all hover:border-blue-500 border-2">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl text-blue-800">{sub.name}</CardTitle>
                <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600">{sub.id}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span><strong>Classes:</strong> {sub.classes}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Users className="w-5 h-5 text-green-600" />
                <span><strong>Teachers:</strong> {sub.teachers}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="w-5 h-5 text-purple-600" />
                <span><strong>Weekly Periods:</strong> {sub.periods}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}