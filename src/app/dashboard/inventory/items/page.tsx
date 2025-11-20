// app/(dashboard)/inventory/items/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Plus, ShoppingCart, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function InventoryItems() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      <div className="text-center py-10">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
          School Inventory Management
        </h1>
        <p className="text-3xl text-gray-700 mt-6">Track Every Asset • Zero Wastage • Full Control</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <Card className="border-2 border-lime-300 bg-gradient-to-br from-lime-50 to-green-50 text-center">
          <CardHeader><Package className="w-16 h-16 mx-auto text-lime-600" /></CardHeader>
          <CardContent><p className="text-6xl font-bold text-lime-700">8,420</p><p className="text-xl mt-2">Total Items</p></CardContent>
        </Card>
        <Card className="border-2 border-green-300 text-center"><CardHeader><CheckCircle2 className="w-16 h-16 mx-auto text-green-600" /></CardHeader><CardContent><p className="text-6xl font-bold text-green-700">7,890</p><p className="text-xl mt-2">In Stock</p></CardContent></Card>
        <Card className="border-2 border-yellow-300 text-center"><CardHeader><AlertTriangle className="w-16 h-16 mx-auto text-yellow-600" /></CardHeader><CardContent><p className="text-6xl font-bold text-yellow-700">142</p><p className="text-xl mt-2">Low Stock</p></CardContent></Card>
        <Card className="border-2 border-red-300 text-center"><CardHeader><ShoppingCart className="w-16 h-16 mx-auto text-red-600" /></CardHeader><CardContent><p className="text-6xl font-bold text-red-700">₹18.4L</p><p className="text-xl mt-2">Purchased This Year</p></CardContent></Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link href="/dashboard/inventory/items/add"><Button className="h-32 text-xl gap-4 bg-lime-600 hover:bg-lime-700"><Plus className="w-10 h-10" />Add Item</Button></Link>
        <Link href="/dashboard/inventory/assigned"><Button className="h-32 text-xl gap-4 bg-green-600 hover:bg-green-700"><Package className="w-10 h-10" />Assigned Items</Button></Link>
        <Link href="/dashboard/inventory/purchase"><Button className="h-32 text-xl gap-4 bg-emerald-600 hover:bg-emerald-700"><ShoppingCart className="w-10 h-10" />New Purchase</Button></Link>
      </div>

      <Card className="border-2 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-lime-600 to-green-600 text-white">
          <CardTitle className="text-3xl">Low Stock Alerts</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          {["A4 Papers (Reams)", "White Board Markers", "Cricket Balls", "Physics Lab Voltmeter"].map((item) => (
            <div key={item} className="flex justify-between items-center p-6 bg-red-50 rounded-2xl border-2 border-red-300">
              <div>
                <p className="text-2xl font-bold text-red-700">{item}</p>
                <p className="text-lg">Only 8 units left</p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">Reorder Now</Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}