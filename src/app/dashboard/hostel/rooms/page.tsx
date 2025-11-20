// app/(dashboard)/hostel/rooms/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Plus, Users, Home, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function HostelRooms() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      <div className="text-center py-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
          Hostel Management
        </h1>
        <p className="text-2xl text-gray-700 mt-4">4 Hostels • 380 Rooms • 1,520 Students</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="border-2 border-rose-300 bg-gradient-to-br from-rose-50 to-pink-50">
          <CardHeader className="text-center"><CardTitle className="text-rose-800">Total Rooms</CardTitle></CardHeader>
          <CardContent className="text-center"><p className="text-6xl font-bold text-rose-700">380</p></CardContent>
        </Card>
        <Card className="border-2 border-green-300"><CardHeader className="text-center"><CardTitle className="text-green-800">Occupied</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-green-700">1,480</p></CardContent></Card>
        <Card className="border-2 border-blue-300"><CardHeader className="text-center"><CardTitle className="text-blue-800">Vacant</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-blue-700">40</p></CardContent></Card>
        <Card className="border-2 border-purple-300"><CardHeader className="text-center"><CardTitle className="text-purple-800">Complaints</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-purple-700">8</p></CardContent></Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link href="/dashboard/hostel/rooms/add"><Button className="h-32 text-xl gap-3 bg-rose-600 hover:bg-rose-700"><Plus className="w-10 h-10" />Add Room</Button></Link>
        <Link href="/dashboard/hostel/students"><Button className="h-32 text-xl gap-3 bg-pink-600 hover:bg-pink-700"><Users className="w-10 h-10" />Students</Button></Link>
        <Link href="/dashboard/hostel/fees"><Button className="h-32 text-xl gap-3 bg-emerald-600 hover:bg-emerald-700"><Home className="w-10 h-10" />Hostel Fees</Button></Link>
        <Link href="/dashboard/hostel/complaints"><Button className="h-32 text-xl gap-3 bg-orange-600 hover:bg-orange-700">
            <AlertCircle className="w-10 h-10" />Complaints</Button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Boys Hostel A", "Girls Hostel B", "Senior Wing"].map((hostel) => (
          <Card key={hostel} className="hover:shadow-2xl transition-all border-2 hover:border-rose-500">
            <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
              <CardTitle className="text-2xl">{hostel}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between text-lg"><span>Total Rooms</span><span className="font-bold">120</span></div>
              <div className="flex justify-between text-lg"><span>Occupied</span><span className="font-bold text-green-600">118</span></div>
              <div className="flex justify-between text-lg"><span>Warden</span><span className="font-bold">Mrs. Anita Verma</span></div>
              <Button className="w-full mt-4" variant="outline">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}