// app/(dashboard)/subjects/add/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export default function AddSubject() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/subjects">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-blue-700">Add New Subject</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-lg">Subject Name</Label>
            <Input placeholder="e.g. Mathematics" className="h-12 text-lg" />
          </div>
          <div className="space-y-2">
            <Label className="text-lg">Subject Code</Label>
            <Input placeholder="e.g. MATH101" className="h-12 text-lg" />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-lg">Description</Label>
          <Textarea 
            placeholder="Brief description of the subject..."
            className="min-h-32 text-base"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label>Classes</Label>
            <Input placeholder="1–12" />
          </div>
          <div className="space-y-2">
            <Label>Weekly Periods</Label>
            <Input type="number" placeholder="35" />
          </div>
          <div className="space-y-2">
            <Label>Practical Hours</Label>
            <Input type="number" placeholder="0" />
          </div>
          <div className="space-y-2">
            <Label>Subject Type</Label>
            <Input placeholder="Core" />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-6 border-t">
          <Button variant="outline" size="lg">Cancel</Button>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8">
            <BookOpen className="w-5 h-5 mr-2" /> Create Subject
          </Button>
        </div>
      </div>
    </div>
  );
}