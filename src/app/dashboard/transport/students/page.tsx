"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, CheckCircle2 } from "lucide-react";

export default function AssignStudents() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 p-6">
      <h1 className="text-5xl font-bold text-center text-emerald-700">Assign Students to Transport Routes</h1>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-4 border-emerald-300 rounded-3xl p-12">
        <div className="text-center space-y-8">
          <Input placeholder="Enter Student Name / Admission No" className="max-w-lg mx-auto h-16 text-xl text-center" />
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="bg-emerald-100 w-32 h-32 rounded-full" />
              <div className="text-left">
                <p className="text-3xl font-bold">Priya Singh</p>
                <p className="text-xl text-gray-600">Class 9-B • Roll 23</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Button size="lg" variant="outline" className="h-20 text-xl">R-05 Greater Noida</Button>
              <Button size="lg" className="h-20 text-xl bg-emerald-600 gap-3">
                <MapPin className="w-8 h-8" /> Assign Route
              </Button>
            </div>
          </div>
          <Badge className="text-2xl px-10 py-4 bg-green-600">
            <CheckCircle2 className="w-8 h-8 mr-3" />
            1,480 Students Assigned Successfully
          </Badge>
        </div>
      </div>
    </div>
  );
}