// app/(dashboard)/teachers/add/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AddTeacher() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/teachers">
          <Button variant="ghost" size="icon"><ArrowLeft /></Button>
        </Link>
        <h1 className="text-3xl font-bold">Add New Teacher</h1>
      </div>

      <Card>
        <CardHeader><CardTitle>Teacher Details</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><Label>First Name</Label><Input placeholder="Priya" /></div>
            <div><Label>Last Name</Label><Input placeholder="Singh" /></div>
            <div><Label>Email</Label><Input type="email" placeholder="priya@school.com" /></div>
            <div><Label>Phone</Label><Input placeholder="+91 98765 43210" /></div>
            <div><Label>Subject</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select subject" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div><Label>Salary (Monthly)</Label><Input placeholder="₹85,000" /></div>
            <div><Label>Joining Date</Label><Input type="date" /></div>
            <div><Label>Qualification</Label><Input placeholder="M.Sc, B.Ed" /></div>
          </div>
          <Button size="lg" className="w-full md:w-auto">Save Teacher</Button>
        </CardContent>
      </Card>
    </div>
  );
}