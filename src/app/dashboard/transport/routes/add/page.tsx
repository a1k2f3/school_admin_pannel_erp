"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";

export default function AddRoute() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/transport/routes"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-4xl font-bold text-amber-700">Add New Transport Route</h1>
      </div>

      <Card  className="border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center">
          <MapPin className="w-20 h-20 mx-auto mb-4" />
          <CardTitle className="text-3xl">Route Details</CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2"><Label className="text-lg">Route Name</Label><Input placeholder="R-05 Greater Noida" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Vehicle No</Label><Input placeholder="DL-1PC-8956" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Driver Name</Label><Input placeholder="Suresh Yadav" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Driver Mobile</Label><Input placeholder="+91 98765 43210" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Capacity</Label><Input type="number" placeholder="50" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Fee (Monthly)</Label><Input placeholder="₹2,500" className="h-14 text-lg" /></div>
          </div>

          <div className="flex justify-end gap-6 pt-8 border-t">
            <Button variant="outline" size="lg">Cancel</Button>
            <Button size="lg" className="gap-3 bg-gradient-to-r from-amber-600 to-orange-600 px-12">
              <MapPin className="w-6 h-6" /> Create Route
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}