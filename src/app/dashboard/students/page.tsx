// app/(dashboard)/students/page.tsx
"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Download, Filter } from "lucide-react";
import Link from "next/link";

const students = [
  { id: "STU001", name: "Aarav Sharma", class: "10-A", roll: "01", status: "Active", fees: "Paid" },
  { id: "STU002", name: "Diya Patel", class: "10-A", roll: "02", status: "Active", fees: "Pending" },
  { id: "STU003", name: "Rohan Kumar", class: "9-B", roll: "15", status: "Suspended", fees: "Pending" },
  // ... more data
];

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Students</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage student records and profiles</p>
        </div>
        <Link href="/dashboard/students/add">
          <Button className="gap-2">
            <Plus className="w-4 h-4" /> Add Student
          </Button>
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input placeholder="Search students..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="10">Class 10</SelectItem>
              <SelectItem value="9">Class 9</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" /> Export
          </Button>
        </div>

        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Roll No</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Fees</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.roll}</TableCell>
                  <TableCell>
                    <Badge variant={student.status === "Active" ? "default" : student.status === "Suspended" ? "destructive" : "secondary"}>
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={student.fees === "Paid" ? "default" : "destructive"}>
                      {student.fees}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Link href={`/dashboard/students/${student.id}`}>
                      <Button size="sm" variant="ghost">View</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}