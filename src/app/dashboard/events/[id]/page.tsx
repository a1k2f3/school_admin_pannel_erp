"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function EventDetail() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-700">Annual Sports Day 2025</h1>
        <Badge className="text-2xl px-8 py-3 mt-6 bg-green-600">UPCOMING</Badge>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-4 border-purple-300 rounded-3xl p-12 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xl">
          <div><Calendar className="w-12 h-12 mx-auto text-purple-600 mb-2" /><p className="font-bold">12 Dec 2025</p><p>Friday</p></div>
          <div><MapPin className="w-12 h-12 mx-auto text-purple-600 mb-2" /><p className="font-bold">Main Ground</p><p>8:00 AM Onwards</p></div>
          <div><Users className="w-12 h-12 mx-auto text-purple-600 mb-2" /><p className="font-bold">890</p><p>Registered</p></div>
          <div><Trophy className="w-12 h-12 mx-auto text-purple-600 mb-2" /><p className="font-bold">42 Events</p><p>100+ Prizes</p></div>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <Button size="lg" className="gap-4 text-xl px-12 bg-purple-600">
            <Users className="w-8 h-8" /> View Registrations
          </Button>
          <Button size="lg" variant="outline" className="gap-4 text-xl px-12 border-purple-600 text-purple-700">
            Send Reminder SMS
          </Button>
        </div>
      </div>
    </div>
  );
}