"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar, Trophy } from "lucide-react";
import Link from "next/link";

export default function AddEvent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/events"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-4xl font-bold text-purple-700">Create New Event</h1>
      </div>

      <Card className="border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
          <Trophy className="w-20 h-20 mx-auto mb-4" />
          <CardTitle className="text-3xl">Event Details</CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2"><Label className="text-lg">Event Name</Label><Input placeholder="Annual Day 2025" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Event Type</Label><Input placeholder="Cultural / Sports / Academic" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Date</Label><Input type="date" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Time</Label><Input type="time" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Venue</Label><Input placeholder="School Auditorium" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Chief Guest</Label><Input placeholder="Mr. Rajesh Gupta" className="h-14 text-lg" /></div>
          </div>
          <div className="space-y-2"><Label className="text-lg">Description</Label><Textarea placeholder="Brief about the event..." className="min-h-40" /></div>

          <div className="flex justify-end gap-6 pt-8 border-t">
            <Button variant="outline" size="lg">Cancel</Button>
            <Button size="lg" className="gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-12">
              <Calendar className="w-6 h-6" /> Create Event
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}