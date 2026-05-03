"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Users, BookOpen, Calendar } from "lucide-react";
import Link from "next/link";

export default function ClassesPage() {
  const [classes, setClasses] = useState<any[]>([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const schoolId = localStorage.getItem("userId");

        if (!schoolId) {
          console.error("No schoolId found in localStorage");
          return;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/class/?schoolId=${schoolId}`
        );

        const data = await res.json();
        setClasses(data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Classes</h1>
          <p className="text-gray-600">
            Manage academic classes and sections
          </p>
        </div>

        <Link href="/dashboard/classes/add">
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Plus className="w-5 h-5" /> Add Class
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {classes.map((cls) => (
          <Link key={cls._id} href={`/dashboard/classes/${cls._id}`}>
            <Card className="hover:shadow-xl transition-all hover:border-blue-500 cursor-pointer border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl text-blue-700">
                  {cls.className}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Students */}
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Students</p>
                    <p className="font-bold text-lg">
                      {cls.strength || 0}
                    </p>
                  </div>
                </div>

                {/* Sections */}
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <BookOpen className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sections</p>
                    <p className="font-bold text-lg">
                      {cls.section || "-"}
                    </p>
                  </div>
                </div>

                {/* Teachers (not in API → placeholder) */}
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Teachers</p>
                    <p className="font-bold text-lg">--</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}