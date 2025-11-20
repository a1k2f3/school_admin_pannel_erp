// app/(dashboard)/transport/vehicles/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bus, Plus, Wrench, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function VehiclesList() {
  const vehicles = [
    { no: "DL-1PC-4587", type: "AC Bus", seats: 50, driver: "Rajesh Kumar", route: "R-01 Dwarka", status: "Active", insurance: "15 Mar 2026" },
    { no: "DL-1PC-8956", type: "Non-AC Bus", seats: 44, driver: "Suresh Yadav", route: "R-05 Gr Noida", status: "In Service", insurance: "22 Jan 2026" },
    { no: "DL-1PC-1234", type: "Mini Van", seats: 14, driver: "Manoj Singh", route: "R-12 Staff", status: "Maintenance", insurance: "10 Dec 2025" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-orange-700">School Vehicles</h1>
          <p className="text-xl text-gray-600 mt-2">Total Fleet: 48 Buses • 52 Drivers</p>
        </div>
        <Link href="/dashboard/transport/vehicles/add">
          <Button size="lg" className="gap-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
            <Plus className="w-6 h-6" /> Add New Vehicle
          </Button>
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader className="text-center"><CardTitle className="text-green-800">On Road</CardTitle></CardHeader>
          <CardContent className="text-center"><p className="text-6xl font-bold text-green-700">44</p></CardContent>
        </Card>
        <Card className="border-2 border-blue-300"><CardHeader className="text-center"><CardTitle className="text-blue-800">Total Capacity</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-blue-700">2,150</p><p className="text-sm text-gray-600">Seats</p></CardContent></Card>
        <Card className="border-2 border-yellow-300"><CardHeader className="text-center"><CardTitle className="text-yellow-800">In Service</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-yellow-700">3</p></CardContent></Card>
        <Card className="border-2 border-red-300"><CardHeader className="text-center"><CardTitle className="text-red-800">Insurance Due</CardTitle></CardHeader><CardContent className="text-center"><p className="text-6xl font-bold text-red-700">2</p></CardContent></Card>
      </div>

      {/* Full Table */}
      <Card className="border-2 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <CardTitle className="text-3xl flex items-center gap-4">
            <Bus className="w-10 h-10" /> Complete Vehicle List
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Registration No</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Seats</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Insurance Expiry</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((v) => (
                <TableRow key={v.no} className="hover:bg-orange-50">
                  <TableCell className="font-bold text-orange-700">{v.no}</TableCell>
                  <TableCell>{v.type}</TableCell>
                  <TableCell>{v.seats}</TableCell>
                  <TableCell>{v.driver}</TableCell>
                  <TableCell>{v.route}</TableCell>
                  <TableCell>{v.insurance}</TableCell>
                  <TableCell>
                    <Badge className={
                      v.status === "Active" ? "bg-green-600" :
                      v.status === "In Service" ? "bg-yellow-600" :
                      "bg-red-600"
                    }>
                      {v.status === "In Service" ? <Wrench className="w-4 h-4 mr-1" /> : null}
                      {v.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}