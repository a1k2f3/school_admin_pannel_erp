// app/(dashboard)/library/books/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Plus, Users, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function LibraryBooks() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
          Library Management
        </h1>
        <p className="text-2xl text-gray-700 mt-4">Total Books: 12,450 • Active Members: 1,560</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-emerald-50">
          <CardHeader className="text-center"><CardTitle className="text-teal-800">Total Books</CardTitle></CardHeader>
          <CardContent className="text-center"><p className="text-6xl font-bold text-teal-700">12,450</p></CardContent>
        </Card>
        <Card className="border-2 border-green-300"><CardHeader className="text-center"><CardTitle className="text-green-800">Issued Today</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-green-700">142</p></CardContent></Card>
        <Card className="border-2 border-orange-300"><CardHeader className="text-center"><CardTitle className="text-orange-800">Overdue</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-orange-700">18</p></CardContent></Card>
        <Card className="border-2 border-purple-300"><CardHeader className="text-center"><CardTitle className="text-purple-800">Fines Collected</CardTitle></CardHeader><CardContent className="text-center"><p className="text-5xl font-bold text-purple-700">₹4,250</p></CardContent></Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link href="/dashboard/library/books/add"><Button className="h-32 text-xl gap-3 bg-teal-600 hover:bg-teal-700"><Plus className="w-10 h-10" />Add Book</Button></Link>
        <Link href="/dashboard/library/issue-return"><Button className="h-32 text-xl gap-3 bg-emerald-600 hover:bg-emerald-700"><BookOpen className="w-10 h-10" />Issue / Return</Button></Link>
        <Link href="/dashboard/library/students"><Button className="h-32 text-xl gap-3 bg-indigo-600 hover:bg-indigo-700"><Users className="w-10 h-10" />Issued to Students</Button></Link>
        <Link href="/dashboard/library/fines"><Button className="h-32 text-xl gap-3 bg-orange-600 hover:bg-orange-700"><AlertCircle className="w-10 h-10" />Fines</Button></Link>
      </div>

      {/* Search + Popular Books */}
      <div className="bg-white rounded-3xl shadow-2xl border-2 p-8">
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
          <Input placeholder="Search by title, author, ISBN..." className="pl-14 h-16 text-xl" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Harry Potter", "Science NCERT", "Mathematics RD Sharma", "English Grammar"].map((book) => (
            <Card key={book} className="hover:shadow-xl transition-all cursor-pointer border-2 hover:border-teal-500">
              <CardContent className="pt-6 text-center">
                <div className="bg-teal-100 w-24 h-32 mx-auto rounded-lg mb-4" />
                <p className="font-bold text-lg">{book}</p>
                <Badge className="mt-2">Available: 12</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}