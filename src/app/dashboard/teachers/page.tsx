"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Download, DollarSign, Loader2 } from "lucide-react";
import Link from "next/link";

interface JobApplication {
  _id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  qualification: string;
  university: string;
  status: string;
  createdAt: string;
}

export default function TeachersPage() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Fetch Data from API
  useEffect(() => {
    const fetchApplications = async () => {
      const schoolId = localStorage.getItem('userId');
      if (!schoolId) {
        console.error("No schoolId found");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobapplication/school?schoolId=${schoolId}`);
        const data = await response.json();
        // Handle cases where data might be wrapped in an object or array
        setApplications(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // 2. Export to CSV Logic
  const exportToCSV = () => {
    if (applications.length === 0) return;

    const headers = "Name,Email,Phone,Position,Qualification,University,Status,Date Applied\n";
    const rows = applications.map(app => (
      `"${app.name.trim()}","${app.email.trim()}","${app.phone.trim()}","${app.position.trim()}","${app.qualification.trim()}","${app.university.trim()}","${app.status}","${new Date(app.createdAt).toLocaleDateString()}"`
    )).join("\n");

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Teacher_Applications_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 3. Filter Logic
  const filteredApps = applications.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Teachers & Applicants</h1>
          <p className="text-gray-600 dark:text-gray-400">Review and manage job applications</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/dashboard/teachers/add">
            <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4" /> Add Application
            </Button>
          </Link>
          <Button variant="outline" className="gap-2 border-green-600 text-green-700" onClick={() => alert("Payroll feature coming soon!")}>
            <DollarSign className="w-4 h-4" /> Payroll
          </Button>
        </div>
      </div>

      {/* Filter & Export Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Search by name or position..." 
              className="pl-11 h-12 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" onClick={exportToCSV} className="gap-2" disabled={applications.length === 0}>
            <Download className="w-4 h-4" /> Export List
          </Button>
        </div>

        {/* Applications Table */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center p-20 gap-4">
              <Loader2 className="animate-spin w-12 h-12 text-blue-600" />
              <p className="text-gray-500">Loading applications...</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Applicant</TableHead>
                  <TableHead className="font-bold">Position</TableHead>
                  <TableHead className="font-bold">Education</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                  <TableHead className="font-bold">Applied On</TableHead>
                  <TableHead className="text-right font-bold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApps.length > 0 ? (
                  filteredApps.map((app) => (
                    <TableRow key={app._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <TableCell>
                        <div>
                          <p className="font-semibold text-base">{app.name}</p>
                          <p className="text-xs text-gray-500">{app.email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{app.position}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{app.qualification}</p>
                          <p className="text-xs text-gray-500">{app.university}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          className={app.status === "pending" ? "bg-orange-100 text-orange-700 hover:bg-orange-100" : "bg-green-100 text-green-700"}
                        >
                          {app.status.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <Link href={`/dashboard/teachers/${app._id}`}>
                          <Button size="sm" variant="secondary" className="border">View Profile</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10 text-gray-500">
                      No applications found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      {/* Summary Cards */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100">
            <p className="text-blue-600 font-semibold mb-1">Total Applicants</p>
            <p className="text-3xl font-bold">{applications.length}</p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-2xl border border-orange-100">
            <p className="text-orange-600 font-semibold mb-1">Pending Review</p>
            <p className="text-3xl font-bold">{applications.filter(a => a.status === 'pending').length}</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100">
            <p className="text-green-600 font-semibold mb-1">Shortlisted</p>
            <p className="text-3xl font-bold">{applications.filter(a => a.status === 'shortlisted').length}</p>
          </div>
        </div>
      )}
    </div>
  );
}