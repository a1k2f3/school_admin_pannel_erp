"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar, Trophy } from "lucide-react";
import Link from "next/link";

export default function AddEvent() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    date: "",
    time: "",
    venue: "",
    chiefGuest: "",
    totalSlots: "",
    description: "",
  });

  // Handle input change
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form
  const validateForm = () => {
    if (!formData.name || !formData.type || !formData.date) {
      alert("Please fill required fields ❗");
      return false;
    }
    return true;
  };

  // Submit form
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      const schoolId = localStorage.getItem("userId"); // 👈 your stored ID

      if (!token || !schoolId) {
        alert("Unauthorized ❌ Please login again");
        return;
      }

      const response = await fetch("http://localhost:5000/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          totalSlots: Number(formData.totalSlots),
          schoolId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("🎉 Event Created Successfully!");
        router.push("/dashboard/events"); // redirect
      } else {
        alert(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/events">
          <Button variant="ghost" size="icon">
            <ArrowLeft />
          </Button>
        </Link>
        <h1 className="text-4xl font-bold text-purple-700">
          Create New Event
        </h1>
      </div>

      {/* Card */}
      <Card className="border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
          <Trophy className="w-20 h-20 mx-auto mb-4" />
          <CardTitle className="text-3xl">Event Details</CardTitle>
        </CardHeader>

        <CardContent className="p-10 space-y-8">
          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <Label>Event Name *</Label>
              <Input name="name" onChange={handleChange} />
            </div>

            <div>
              <Label>Event Type *</Label>
              <Input name="type" onChange={handleChange} />
            </div>

            <div>
              <Label>Date *</Label>
              <Input type="date" name="date" onChange={handleChange} />
            </div>

            <div>
              <Label>Time</Label>
              <Input
                name="time"
                placeholder="09:00 AM - 03:00 PM"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Venue</Label>
              <Input name="venue" onChange={handleChange} />
            </div>

            <div>
              <Label>Chief Guest</Label>
              <Input name="chiefGuest" onChange={handleChange} />
            </div>

            <div>
              <Label>Total Slots</Label>
              <Input
                type="number"
                name="totalSlots"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <Label>Description</Label>
            <Textarea
              name="description"
              placeholder="Brief about the event..."
              className="min-h-32"
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-6 pt-8 border-t">
            <Button
              variant="outline"
              onClick={() => router.push("/dashboard/events")}
            >
              Cancel
            </Button>

            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-12"
            >
              {loading ? "Creating..." : (
                <>
                  <Calendar className="w-5 h-5 mr-2" />
                  Create Event
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}