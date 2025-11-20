// app/(dashboard)/teachers/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Download, DollarSign, Calendar, FileText } from "lucide-react";
import Link from "next/link";


// /link";

const teachers = [
  { id: "TCR001", name: "Priya Singh", subject: "Mathematics", class: "10-A, 10-B", status: "Active", salary: "₹85,000" },
  { id: "TCR002", name: "Rahul Verma", subject: "Physics", class: "11-A, 12-A", status: "Active", salary: "₹92,000" },
  { id: "TCR003", name: "Anita Sharma", subject: "English", class: "9-All", status: "On Leave", salary: "₹78,000" },
];

export default function TeachersPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold">Teachers</h1>
          <p className="text-gray-600">Manage faculty and staff</p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link href="/dashboard/teachers/add">
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4" /> Add Teacher
            </Button>
          </Link>

          {/* Direct Routes */}
          <Link href="/dashboard/teachers/salary">
            <Button variant="outline" className="gap-2 border-green-600 text-green-700 hover:bg-green-50">
              <DollarSign className="w-4 h-4" /> Salary
            </Button>
          </Link>

          <Link href="/dashboard/teachers/leaves">
            <Button variant="outline" className="gap-2 border-orange-600 text-orange-700 hover:bg-orange-50">
              <Calendar className="w-4 h-4" /> Leaves
            </Button>
          </Link>

          <Link href="/dashboard/teachers/documents">
            <Button variant="outline" className="gap-2 border-purple-600 text-purple-700 hover:bg-purple-50">
              <FileText className="w-4 h-4" /> Documents
            </Button>
          </Link>
        </div>
      </div>

      {/* Search & Export */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search by name, ID, subject..." 
              className="pl-11 h-12 text-base" 
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" /> Export List
          </Button>
        </div>

        {/* Teachers Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-32">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Classes</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers.map((t) => (
                <TableRow key={t.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-semibold text-blue-700">{t.id}</TableCell>
                  <TableCell className="font-medium text-lg">{t.name}</TableCell>
                  <TableCell>{t.subject}</TableCell>
                  <TableCell className="text-gray-700">{t.class}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={t.status === "Active" ? "default" : "secondary"}
                      className={t.status === "Active" ? "bg-green-600" : "bg-orange-600"}
                    >
                      {t.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-green-700">{t.salary}</TableCell>
                  <TableCell className="text-right">
                    <Link href={`/dashboard/teachers/${t.id}`}>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        View Profile
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center">
          <p className="text-3xl font-bold text-blue-700">48</p>
          <p className="text-gray-600">Total Teachers</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl text-center">
          <p className="text-3xl font-bold text-green-700">42</p>
          <p className="text-gray-600">Active</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl text-center">
          <p className="text-3xl font-bold text-orange-700">6</p>
          <p className="text-gray-600">On Leave</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl text-center">
          <p className="text-3xl font-bold text-purple-700">₹42L</p>
          <p className="text-gray-600">Monthly Payroll</p>
        </div>
      </div>
    </div>
  );
}