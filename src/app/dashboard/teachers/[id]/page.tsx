// app/(dashboard)/teachers/[id]/page.tsx
"use client";

import { use } from "react"; // ← THIS IS THE KEY FIX
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Edit, Phone, Mail, Calendar, User, DollarSign, FileText, Briefcase, Download } from "lucide-react";
import Link from "next/link";

// FIXED: params is now a Promise → must use `use(params)`
export default function TeacherProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ← This removes the error FOREVER

  const teacher = {
    id,
    name: "Priya Sharma",
    subject: "Mathematics",
    classes: "10-A, 10-B, 11-A",
    phone: "+91 98765 43210",
    email: "priya.sharma@school.com",
    qualification: "M.Sc Mathematics, B.Ed",
    joining: "01 Apr 2023",
    salary: 65000,
    status: "Active",
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/teachers">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">{teacher.name}</h1>
            <p className="text-gray-600">ID: {teacher.id} • {teacher.subject} Teacher</p>
          </div>
        </div>

        <Link href={`/dashboard/teachers/${id}/edit`}>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Edit className="w-4 h-4" /> Edit Profile
          </Button>
        </Link>
      </div>

      {/* Profile Card */}
      <Card>
        <CardContent className="pt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Avatar className="w-32 h-32">
              <AvatarFallback className="text-4xl bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                PS
              </AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold">{teacher.name}</h2>
              <Badge className="mt-2 text-lg px-6 py-2 bg-purple-600">
                {teacher.subject} Teacher
              </Badge>
              <div className="grid grid-cols-2 gap-6 mt-6 text-sm">
                <div className="flex gap-3"><Phone className="w-5 h-5 text-gray-500" /><span className="font-medium">{teacher.phone}</span></div>
                <div className="flex gap-3"><Mail className="w-5 h-5 text-gray-500" /><span className="font-medium">{teacher.email}</span></div>
                <div className="flex gap-3"><Briefcase className="w-5 h-5 text-gray-500" /><span className="font-medium">Classes: {teacher.classes}</span></div>
                <div className="flex gap-3"><Calendar className="w-5 h-5 text-gray-500" /><span className="font-medium">Joined: {teacher.joining}</span></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* TABS — NO URL CHANGE — INSTANT SWITCH */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 rounded-xl h-14 bg-gray-100 dark:bg-gray-800">
          <TabsTrigger value="overview" className="gap-2 text-sm font-medium">
            <User className="w-5 h-5" /> Overview
          </TabsTrigger>
          <TabsTrigger value="leaves" className="gap-2 text-sm font-medium">
            <Calendar className="w-5 h-5" /> Leaves
          </TabsTrigger>
          <TabsTrigger value="salary" className="gap-2 text-sm font-medium">
            <DollarSign className="w-5 h-5" /> Salary
          </TabsTrigger>
          <TabsTrigger value="documents" className="gap-2 text-sm font-medium">
            <FileText className="w-5 h-5" /> Documents
          </TabsTrigger>
        </TabsList>

        {/* OVERVIEW */}
        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-purple-200">
              <CardHeader><CardTitle className="text-purple-700">Experience</CardTitle></CardHeader>
              <CardContent className="text-center">
                <p className="text-5xl font-bold text-purple-600">2.5</p>
                <p className="text-xl">Years</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200">
              <CardHeader><CardTitle className="text-blue-700">Classes</CardTitle></CardHeader>
              <CardContent className="text-center">
                <p className="text-5xl font-bold text-blue-600">3</p>
                <p className="text-xl">{teacher.classes}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200">
              <CardHeader><CardTitle className="text-green-700">Salary</CardTitle></CardHeader>
              <CardContent className="text-center">
                <p className="text-5xl font-bold text-green-600">₹{teacher.salary.toLocaleString()}</p>
                <p className="text-xl">per month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* LEAVES */}
        <TabsContent value="leaves" className="mt-6">
          <Card>
            <CardHeader><CardTitle className="text-2xl">Leave History</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date Range</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Days</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell>10-15 Mar 2025</TableCell><TableCell>Casual Leave</TableCell><TableCell>5</TableCell><TableCell><Badge className="bg-green-600">Approved</Badge></TableCell></TableRow>
                  <TableRow><TableCell>02 Jan 2025</TableCell><TableCell>Sick Leave</TableCell><TableCell>1</TableCell><TableCell><Badge className="bg-green-600">Approved</Badge></TableCell></TableRow>
                  <TableRow><TableCell>20 Dec 2024</TableCell><TableCell>Personal</TableCell><TableCell>2</TableCell><TableCell><Badge variant="secondary">Pending</Badge></TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SALARY */}
        <TabsContent value="salary" className="mt-6">
          <Card>
            <CardHeader><CardTitle className="text-2xl">Salary Slips</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Gross</TableHead>
                    <TableHead>Deductions</TableHead>
                    <TableHead>Net Pay</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>May 2025</TableCell>
                    <TableCell>₹65,000</TableCell>
                    <TableCell>₹5,000</TableCell>
                    <TableCell className="font-bold text-green-600">₹60,000</TableCell>
                    <TableCell><Button size="sm" className="gap-2"><Download className="w-4 h-4" /> Download</Button></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>April 2025</TableCell>
                    <TableCell>₹65,000</TableCell>
                    <TableCell>₹5,000</TableCell>
                    <TableCell className="font-bold text-green-600">₹60,000</TableCell>
                    <TableCell><Button size="sm" className="gap-2"><Download className="w-4 h-4" /> Download</Button></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DOCUMENTS */}
        <TabsContent value="documents" className="mt-6">
          <Card>
            <CardHeader><CardTitle className="text-2xl">Teacher Documents</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Resume", "Aadhar Card", "PAN Card", "Degree Certificate", "Experience Letter"].map((doc) => (
                  <div key={doc} className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 rounded-xl border">
                    <div className="flex items-center gap-4">
                      <FileText className="w-10 h-10 text-purple-600" />
                      <span className="text-lg font-semibold">{doc}</span>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Download className="w-5 h-5" /> Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}