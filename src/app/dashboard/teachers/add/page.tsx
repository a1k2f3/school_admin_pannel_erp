"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Loader2, Upload, FileType } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddTeacher() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [schoolId, setSchoolId] = useState<string>("");

  useEffect(() => {
    const storedId = localStorage.getItem('userId');
    if (storedId) setSchoolId(storedId);
  }, []);

  // --- CSV PARSING LOGIC ---
  const handleCsvUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target?.result as string;
      const rows = text.split("\n").map(row => row.split(","));
      
      // Assuming row 0 is headers: name,email,phone,address,position,gender,qualification,university,yearOfPassing,cgpa
      const dataRows = rows.slice(1); 

      let successCount = 0;

      for (const row of dataRows) {
        if (row.length < 2) continue; // Skip empty rows

        const formData = new FormData();
        formData.append("name", row[0]?.replace(/"/g, "").trim());
        formData.append("email", row[1]?.replace(/"/g, "").trim());
        formData.append("phone", row[2]?.replace(/"/g, "").trim());
        formData.append("address", row[3]?.replace(/"/g, "").trim());
        formData.append("position", row[4]?.replace(/"/g, "").trim());
        formData.append("gender", row[5]?.replace(/"/g, "").trim());
        formData.append("qualification", row[6]?.replace(/"/g, "").trim());
        formData.append("university", row[7]?.replace(/"/g, "").trim());
        formData.append("yearOfPassing", row[8]?.replace(/"/g, "").trim());
        formData.append("cgpa", row[9]?.replace(/"/g, "").trim());
        formData.append("schoolId", schoolId);

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobapplication`, {
            method: "POST",
            body: formData,
          });
          if (res.ok) successCount++;
        } catch (err) {
          console.error("Row upload failed", err);
        }
      }

      alert(`Successfully imported ${successCount} applications! Note: CSV import does not include files (CV/Photo).`);
      setLoading(false);
      router.push("/dashboard/teachers");
    };

    reader.readAsText(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    if (schoolId) formData.append("schoolId", schoolId);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/jobapplication`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        router.push("/dashboard/teachers");
      } else {
        const errorData = await response.json();
        alert(`Failed: ${errorData.message || "Error"}`);
      }
    } catch (error) {
      alert("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/teachers">
            <Button variant="ghost" size="icon"><ArrowLeft /></Button>
          </Link>
          <h1 className="text-3xl font-bold">Add Teacher</h1>
        </div>
        
        {/* CSV Import Button */}
        <div className="flex gap-2">
          <input 
            type="file" 
            accept=".csv" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleCsvUpload}
          />
          <Button 
            variant="outline" 
            onClick={() => fileInputRef.current?.click()}
            disabled={loading}
            className="gap-2"
          >
            <FileType className="w-4 h-4" /> Import CSV
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manual Entry</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* ... Your existing Input fields (name, email, phone, etc.) ... */}
               <div><Label>Full Name</Label><Input name="name" required /></div>
               <div><Label>Email</Label><Input name="email" type="email" required /></div>
               <div><Label>Phone</Label><Input name="phone" required /></div>
               <div><Label>Address</Label><Input name="address" required /></div>
               <div><Label>Position</Label><Input name="position" required /></div>
               <div>
                <Label>Gender</Label>
                <Select name="gender" required>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>
               </div>
               <div><Label>Qualification</Label><Input name="qualification" required /></div>
               <div><Label>University</Label><Input name="university" required /></div>
               <div><Label>Passing Year</Label><Input name="yearOfPassing" required /></div>
               <div><Label>CGPA</Label><Input name="cgpa" step="0.01" type="number" required /></div>
               
               {/* File fields remain mandatory for manual entry */}
               <div className="md:col-span-2 border-t pt-4 mt-2 font-semibold">Documents</div>
               <div><Label>CV (PDF)</Label><Input name="cv" type="file" accept=".pdf" required /></div>
               <div><Label>Degree</Label><Input name="degree" type="file" required /></div>
               <div><Label>Photo</Label><Input name="photo" type="file" accept="image/*" required /></div>
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto" disabled={loading}>
              {loading ? <Loader2 className="animate-spin mr-2" /> : "Save Teacher"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}