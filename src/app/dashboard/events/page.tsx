// app/(dashboard)/events/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Trophy, Users, Megaphone } from "lucide-react";
import Link from "next/link";

export default function EventsDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      {/* Hero Header */}
      <div className="text-center py-10">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          School Events & Activities
        </h1>
        <p className="text-3xl text-gray-700 mt-6">Academic Year 2025–26 • Celebrate Every Moment</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <Card className="border-2 border-violet-300 bg-gradient-to-br from-violet-50 to-purple-50 text-center">
          <CardHeader><Trophy className="w-16 h-16 mx-auto text-violet-600" /></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-violet-700">24</p>
            <p className="text-xl mt-2">Total Events</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-purple-300 text-center">
          <CardHeader><Calendar className="w-16 h-16 mx-auto text-purple-600" /></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-purple-700">6</p>
            <p className="text-xl mt-2">Upcoming</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-pink-300 text-center">
          <CardHeader><Users className="w-16 h-16 mx-auto text-pink-600" /></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-pink-700">3,840</p>
            <p className="text-xl mt-2">Registrations</p>
          </CardContent>
        </Card>
        <Card className="border-2 border-emerald-300 text-center">
          <CardHeader><Megaphone className="w-16 h-16 mx-auto text-emerald-600" /></CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-emerald-700">98%</p>
            <p className="text-xl mt-2">Parent Attendance</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link href="/dashboard/events/add">
          <Button className="h-32 w-full text-xl gap-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
            <Plus className="w-10 h-10" /> Create Event
          </Button>
        </Link>
        <Link href="/dashboard/events/registrations">
          <Button className="h-32 w-full text-xl gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Users className="w-10 h-10" /> Registrations
          </Button>
        </Link>
      </div>

      {/* Upcoming Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Annual Sports Day 2025", date: "12 Dec 2025", type: "Sports", reg: 890 },
          { title: "Parent Teacher Meeting", date: "28 Nov 2025", type: "Academic", reg: 1240 },
          { title: "Diwali Celebration", date: "08 Nov 2025", type: "Cultural", reg: 1560 },
        ].map((event) => (
          <Card key={event.title} className="hover:shadow-2xl transition-all border-2 hover:border-purple-500">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl">{event.title}</CardTitle>
                <Badge className="bg-green-600">UPCOMING</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <Calendar className="w-6 h-6 text-purple-600" />
                <span className="font-bold">{event.date}</span>
              </div>
              <div className="flex justify-between">
                <span>Type</span>
                <Badge variant="secondary">{event.type}</Badge>
              </div>
              <div className="flex justify-between">
                <span>Registrations</span>
                <span className="font-bold text-purple-700">{event.reg}</span>
              </div>
              <Link href={`/dashboard/events/${event.title.toLowerCase().replace(/ /g, "-")}`}>
                <Button className="w-full mt-4">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}