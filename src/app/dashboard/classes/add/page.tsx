"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddClass() {
  const router = useRouter();

  const [form, setForm] = useState({
    className: "",
    section: "",
    description: "",
    roomNumber: "",
    status: "active",
  });

  const [schoolId, setSchoolId] = useState("");

  // ✅ Get schoolId from localStorage (client-side only)
  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) setSchoolId(id);
  }, []);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/class/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          schoolId,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("Class created successfully");
        router.push("/dashboard/classes");
      } else {
        alert(data.message || "Error creating class");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/classes">
          <Button variant="ghost" size="icon">
            <ArrowLeft />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Add New Class</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border p-8 space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Class Name</Label>
            <Input
              name="className"
              value={form.className}
              onChange={handleChange}
              placeholder="e.g. Class 6"
            />
          </div>

          <div className="space-y-2">
            <Label>Section</Label>
            <Input
              name="section"
              value={form.section}
              onChange={handleChange}
              placeholder="A"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <Input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Science group class"
          />
        </div>

        <div className="space-y-2">
          <Label>Room Number</Label>
          <Input
            name="roomNumber"
            value={form.roomNumber}
            onChange={handleChange}
            placeholder="Room 12"
          />
        </div>

        <div className="flex justify-end gap-4 pt-6">
          <Button variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Create Class
          </Button>
        </div>
      </div>
    </div>
  );
}