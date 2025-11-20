"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { School } from "lucide-react";

export default function GeneralSettings() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 p-8">
      <div className="text-center py-12">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-slate-700 to-zinc-800 bg-clip-text text-transparent">
          School Settings
        </h1>
        <p className="text-3xl text-gray-600 mt-6">Configure Your Institution</p>
      </div>

      <Card className="border-4 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-slate-700 to-zinc-800 text-white text-center py-12">
          <School className="w-32 h-32 mx-auto mb-6" />
          <CardTitle className="text-5xl">Delhi Public School, Dwarka</CardTitle>
          <p className="text-2xl mt-4 opacity-90">CBSE Affiliated • Est. 1998</p>
        </CardHeader>
        <CardContent className="p-12 space-y-10">
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4"><Label className="text-xl">School Name</Label><Input defaultValue="Delhi Public School, Dwarka" className="h-16 text-xl" /></div>
            <div className="space-y-4"><Label className="text-xl">Short Name</Label><Input defaultValue="DPS Dwarka" className="h-16 text-xl" /></div>
            <div className="space-y-4"><Label className="text-xl">Address</Label><Input defaultValue="Sector-19, Dwarka, New Delhi" className="h-16 text-xl" /></div>
            <div className="space-y-4"><Label className="text-xl">Phone</Label><Input defaultValue="+91 11 4567 8900" className="h-16 text-xl" /></div>
            <div className="space-y-4"><Label className="text-xl">Email</Label><Input type="email" defaultValue="principal@dpsdwarka.edu.in" className="h-16 text-xl" /></div>
            <div className="space-y-4"><Label className="text-xl">Website</Label><Input defaultValue="www.dpsdwarka.edu.in" className="h-16 text-xl" /></div>
          </div>

          <div className="pt-10 border-t">
            <Label className="text-xl block mb-6">School Logo (Square Recommended)</Label>
            <div className="flex items-center gap-8">
              <div className="bg-gray-200 border-4 border-dashed rounded-3xl w-48 h-48" />
              <Button size="lg" className="text-xl px-12">Upload New Logo</Button>
            </div>
          </div>

          <div className="flex justify-end pt-10">
            <Button size="lg" className="text-2xl px-20 py-8 bg-gradient-to-r from-slate-700 to-zinc-800">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}