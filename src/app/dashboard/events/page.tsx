"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Trophy, Users, Megaphone } from "lucide-react";
import Link from "next/link";

export default function EventsDashboard() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      const schoolId = localStorage.getItem("userId"); // 👈 correct ID

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/getAll?schoolId=${schoolId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        setEvents(data);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // stats (dynamic)
  const totalEvents = events.length;
  const upcomingEvents = events.filter(e => e.status === "upcoming").length;

  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      {/* Hero Header */}
      <div className="text-center py-10">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          School Events & Activities
        </h1>
        <p className="text-3xl text-gray-700 mt-6">
          Academic Year 2025–26 • Celebrate Every Moment
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <Card className="border-2 border-violet-300 bg-gradient-to-br from-violet-50 to-purple-50 text-center">
          <CardHeader>
            <Trophy className="w-16 h-16 mx-auto text-violet-600" />
          </CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-violet-700">
              {totalEvents}
            </p>
            <p className="text-xl mt-2">Total Events</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-300 text-center">
          <CardHeader>
            <Calendar className="w-16 h-16 mx-auto text-purple-600" />
          </CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-purple-700">
              {upcomingEvents}
            </p>
            <p className="text-xl mt-2">Upcoming</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-pink-300 text-center">
          <CardHeader>
            <Users className="w-16 h-16 mx-auto text-pink-600" />
          </CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-pink-700">
              3840
            </p>
            <p className="text-xl mt-2">Registrations</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-300 text-center">
          <CardHeader>
            <Megaphone className="w-16 h-16 mx-auto text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-emerald-700">
              98%
            </p>
            <p className="text-xl mt-2">Parent Attendance</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link href="/dashboard/events/add">
          <Button className="h-32 w-full text-xl gap-4 bg-gradient-to-r from-violet-600 to-purple-600">
            <Plus className="w-10 h-10" /> Create Event
          </Button>
        </Link>

        <Link href="/dashboard/events/registrations">
          <Button className="h-32 w-full text-xl gap-4 bg-gradient-to-r from-purple-600 to-pink-600">
            <Users className="w-10 h-10" /> Registrations
          </Button>
        </Link>
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p className="text-center col-span-full text-xl">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-center col-span-full text-xl">No events found</p>
        ) : (
          events.map((event) => (
            <Card
              key={event._id}
              className="hover:shadow-2xl transition-all border-2 hover:border-purple-500"
            >
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">
                    {event.name}
                  </CardTitle>
                  <Badge className="bg-green-600 uppercase">
                    {event.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3 text-lg">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <span className="font-bold">
                    {new Date(event.date).toDateString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Type</span>
                  <Badge variant="secondary">{event.type}</Badge>
                </div>

                <div className="flex justify-between">
                  <span>Available Slots</span>
                  <span className="font-bold text-purple-700">
                    {event.availableSlots}
                  </span>
                </div>

                <Link href={`/dashboard/events/${event._id}`}>
                  <Button className="w-full mt-4">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}