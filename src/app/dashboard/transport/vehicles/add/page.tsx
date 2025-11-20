"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Bus } from "lucide-react";
import Link from "next/link";

export default function AddVehicle() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/transport/vehicles"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-4xl font-bold text-orange-700">Add New Vehicle</h1>
      </div>

      <Card className="border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-center">
          <Bus className="w-20 h-20 mx-auto mb-4" />
          <CardTitle className="text-3xl">Vehicle Registration</CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2"><Label className="text-lg">Registration No</Label><Input placeholder="DL-1PC-8956" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Vehicle Type</Label><Input placeholder="AC Bus 50 Seater" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Insurance Expiry</Label><Input type="date" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Pollution Certificate</Label><Input type="date" className="h-14 text-lg" /></div>
          </div>

          <div className="flex justify-end gap-6 pt-8 border-t">
            <Button variant="outline" size="lg">Cancel</Button>
            <Button size="lg" className="gap-3 bg-gradient-to-r from-orange-600 to-red-600 px-12">
              <Bus className="w-6 h-6" /> Register Vehicle
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}