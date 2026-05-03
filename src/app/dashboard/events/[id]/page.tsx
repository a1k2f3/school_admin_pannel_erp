"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function EventDetail() {
  const { id } = useParams(); // 👈 get event ID from URL
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchEvent = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/events/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        setEvent(data);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchEvent();
  }, [id]);

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (!event) {
    return <p className="text-center text-xl">Event not found ❌</p>;
  }

  const formattedDate = new Date(event.date).toDateString();

  return (
    <div className="max-w-5xl mx-auto space-y-10 p-6">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-700">
          {event.name}
        </h1>
        <Badge className="text-2xl px-8 py-3 mt-6 bg-green-600 uppercase">
          {event.status}
        </Badge>
      </div>

      {/* Info Box */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-4 border-purple-300 rounded-3xl p-12 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xl">
          
          {/* Date */}
          <div>
            <Calendar className="w-12 h-12 mx-auto text-purple-600 mb-2" />
            <p className="font-bold">{formattedDate}</p>
            <p>{event.time}</p>
          </div>

          {/* Venue */}
          <div>
            <MapPin className="w-12 h-12 mx-auto text-purple-600 mb-2" />
            <p className="font-bold">{event.venue}</p>
            <p>{event.type}</p>
          </div>

          {/* Slots */}
          <div>
            <Users className="w-12 h-12 mx-auto text-purple-600 mb-2" />
            <p className="font-bold">{event.availableSlots}</p>
            <p>Available Slots</p>
          </div>

          {/* Total */}
          <div>
            <Trophy className="w-12 h-12 mx-auto text-purple-600 mb-2" />
            <p className="font-bold">{event.totalSlots}</p>
            <p>Total Slots</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-8 mt-12">
          <Link href={`/dashboard/events/registrations?eventId=${event._id}`}>
            <Button size="lg" className="gap-4 text-xl px-12 bg-purple-600">
              <Users className="w-8 h-8" /> View Registrations
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
            className="gap-4 text-xl px-12 border-purple-600 text-purple-700"
          >
            Send Reminder SMS
          </Button>
        </div>
      </div>

      {/* Description */}
      <div className="text-center text-xl text-gray-700 max-w-3xl mx-auto">
        {event.description}
      </div>
    </div>
  );
}