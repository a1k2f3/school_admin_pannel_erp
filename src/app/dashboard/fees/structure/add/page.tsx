"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, IndianRupee } from "lucide-react";
import Link from "next/link";

export default function AddFeeStructure() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/fees/structure"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-4xl font-bold text-emerald-700">Create Fee Structure</h1>
      </div>

      <Card className="border-2 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <CardTitle className="text-2xl">Class 10 - Academic Year 2025-26</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-lg">Tuition Fee</Label>
              <Input placeholder="45000" className="h-12 text-lg" />
            </div>
            <div className="space-y-2">
              <Label className="text-lg">Development Fee</Label>
              <Input placeholder="15000" className="h-12 text-lg" />
            </div>
            <div className="space-y-2">
              <Label className="text-lg">Exam Fee</Label>
              <Input placeholder="8000" className="h-12 text-lg" />
            </div>
            <div className="space-y-2">
              <Label className="text-lg">Activity Fee</Label>
              <Input placeholder="7000" className="h-12 text-lg" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
            <div className="flex justify-between text-2xl font-bold text-emerald-800">
              <span>Total Annual Fee</span>
              <span className="flex items-center gap-2">
                <IndianRupee className="w-7 h-7" /> 85,000
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" size="lg">Cancel</Button>
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 px-10">
              <IndianRupee className="w-6 h-6 mr-2" /> Save Structure
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}