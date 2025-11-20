// app/(dashboard)/classes/add/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AddClass() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/classes"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-3xl font-bold">Add New Class</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border p-8 space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Class Name</Label>
            <Input placeholder="e.g. Class 6" />
          </div>
          <div className="space-y-2">
            <Label>Number of Sections</Label>
            <Input type="number" placeholder="3" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Class Teacher (Optional)</Label>
          <Input placeholder="Search teacher..." />
        </div>

        <div className="flex justify-end gap-4 pt-6">
          <Button variant="outline">Cancel</Button>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Create Class</Button>
        </div>
      </div>
    </div>
  );
}