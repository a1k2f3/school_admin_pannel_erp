// app/(dashboard)/fees/structure/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IndianRupee, Plus, Edit3 } from "lucide-react";
import Link from "next/link";

const feeStructures = [
  { class: "Class 10", total: 85000, paid: 72000, due: 13000, students: 156 },
  { class: "Class 9", total: 82000, paid: 78000, due: 4000, students: 148 },
  { class: "Class 8", total: 80000, paid: 80000, due: 0, students: 160 },
];

export default function FeeStructure() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-emerald-700">Fee Structure</h1>
          <p className="text-gray-600 mt-2">Academic Year 2025-26 • Class-wise Fee Details</p>
        </div>
        <Link href="/dashboard/fees/structure/add">
          <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
            <Plus className="w-5 h-5" /> Add New Structure
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {feeStructures.map((cls) => (
          <Card key={cls.class} className="border-2 hover:shadow-2xl transition-all">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
              <CardTitle className="text-2xl flex justify-between">
                {cls.class}
                <Badge className="bg-white text-emerald-700">{cls.students} Students</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-5">
              <div className="flex justify-between text-lg">
                <span>Total Fee</span>
                <span className="font-bold flex items-center gap-1">
                  <IndianRupee className="w-5 h-5" /> {cls.total.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Collected</span>
                <span className="font-bold text-green-600 flex items-center gap-1">
                  <IndianRupee className="w-5 h-5" /> {cls.paid.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Due</span>
                <span className={`font-bold flex items-center gap-1 ${cls.due > 0 ? "text-red-600" : "text-green-600"}`}>
                  <IndianRupee className="w-5 h-5" /> {cls.due.toLocaleString()}
                </span>
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Edit3 className="w-4 h-4 mr-2" /> Edit Structure
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}