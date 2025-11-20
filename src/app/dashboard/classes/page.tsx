// app/(dashboard)/classes/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Users, BookOpen, Calendar } from "lucide-react";
import Link from "next/link";

const classes = [
  { id: "1", name: "Class 1", sections: 3, students: 92, teachers: 8 },
  { id: "2", name: "Class 2", sections: 3, students: 88, teachers: 8 },
  { id: "10", name: "Class 10", sections: 4, students: 156, teachers: 12 },
  { id: "11", name: "Class 11", sections: 3, students: 98, teachers: 15 },
  { id: "12", name: "Class 12", sections: 3, students: 94, teachers: 16 },
];

export default function ClassesPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Classes</h1>
          <p className="text-gray-600">Manage academic classes and sections</p>
        </div>
        <Link href="/dashboard/classes/add">
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Plus className="w-5 h-5" /> Add Class
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {classes.map((cls) => (
          <Link key={cls.id} href={`/dashboard/classes/${cls.id}`}>
            <Card className="hover:shadow-xl transition-all hover:border-blue-500 cursor-pointer border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl text-blue-700">{cls.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-blue-100 rounded-lg"><Users className="w-5 h-5 text-blue-700" /></div>
                  <div><p className="text-sm text-gray-500">Students</p><p className="font-bold text-lg">{cls.students}</p></div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-green-100 rounded-lg"><BookOpen className="w-5 h-5 text-green-700" /></div>
                  <div><p className="text-sm text-gray-500">Sections</p><p className="font-bold text-lg">{cls.sections}</p></div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-purple-100 rounded-lg"><Calendar className="w-5 h-5 text-purple-700" /></div>
                  <div><p className="text-sm text-gray-500">Teachers</p><p className="font-bold text-lg">{cls.teachers}</p></div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}