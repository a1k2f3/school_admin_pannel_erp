"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Bed } from "lucide-react";
import Link from "next/link";

export default function AddRoom() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/hostel/rooms"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-4xl font-bold text-rose-700">Add New Hostel Room</h1>
      </div>

      <Card className="border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white text-center">
          <Bed className="w-20 h-20 mx-auto mb-4" />
          <CardTitle className="text-3xl">Room Details</CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2"><Label className="text-lg">Hostel Name</Label><Input placeholder="Boys Hostel A" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Room No</Label><Input placeholder="A-205" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Floor</Label><Input placeholder="2nd Floor" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Capacity</Label><Input type="number" placeholder="4" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Room Type</Label><Input placeholder="AC / Non-AC" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Monthly Fee</Label><Input placeholder="₹18,000" className="h-14 text-lg" /></div>
          </div>

          <div className="flex justify-end gap-6 pt-8 border-t">
            <Button variant="outline" size="lg">Cancel</Button>
            <Button size="lg" className="gap-3 bg-gradient-to-r from-rose-600 to-pink-600 px-12">
              <Bed className="w-6 h-6" /> Create Room
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}