// app/(dashboard)/transport/routes/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bus, Users, Plus } from "lucide-react";
import Link from "next/link";

export default function TransportRoutes() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      <div className="text-center py-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          School Transport Management
        </h1>
        <p className="text-2xl text-gray-700 mt-4">32 Routes • 48 Buses • 1,480 Students</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50">
          <CardHeader className="text-center"><CardTitle className="text-amber-800">Active Routes</CardTitle></CardHeader>
          <CardContent className="text-center"><p className="text-6xl font-bold text-amber-700">32</p></CardContent>
        </Card>
        <Card className="border-2 border-green-300"><CardHeader className="text-center"><CardTitle className="text-green-800">Buses Running</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-green-700">48</p></CardContent></Card>
        <Card className="border-2 border-blue-300"><CardHeader className="text-center"><CardTitle className="text-blue-800">Students</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-blue-700">1,480</p></CardContent></Card>
        <Card className="border-2 border-purple-300"><CardHeader className="text-center"><CardTitle className="text-purple-800">Drivers</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-purple-700">52</p></CardContent></Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link href="/dashboard/transport/routes/add"><Button className="h-32 text-xl gap-3 bg-amber-600 hover:bg-amber-700"><Plus className="w-10 h-10" />Add Route</Button></Link>
        <Link href="/dashboard/transport/vehicles"><Button className="h-32 text-xl gap-3 bg-orange-600 hover:bg-orange-700"><Bus className="w-10 h-10" />Vehicles</Button></Link>
        <Link href="/dashboard/transport/drivers"><Button className="h-32 text-xl gap-3 bg-indigo-600 hover:bg-indigo-700"><Users className="w-10 h-10" />Drivers</Button></Link>
        <Link href="/dashboard/transport/students"><Button className="h-32 text-xl gap-3 bg-emerald-600 hover:bg-emerald-700"><MapPin className="w-10 h-10" />Assign Students</Button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {["R-01 Dwarka", "R-02 Rohini", "R-03 Noida Sector 62"].map((route) => (
          <Card key={route} className="hover:shadow-2xl transition-all border-2 hover:border-amber-500">
            <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
              <div className="flex justify-between">
                <CardTitle className="text-2xl">{route}</CardTitle>
                <Badge className="bg-green-600">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between text-lg">
                <span>Bus</span><span className="font-bold">DL-1PC-4587</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Students</span><span className="font-bold text-green-600">46</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Driver</span><span className="font-bold">Rajesh Kumar</span>
              </div>
              <Button className="w-full mt-4" variant="outline">View Route Map</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}