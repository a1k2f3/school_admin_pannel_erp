"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Package } from "lucide-react";
import Link from "next/link";

export default function AddItem() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/inventory/items"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-4xl font-bold text-green-700">Add New Inventory Item</h1>
      </div>

      <Card className="border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-lime-600 to-green-600 text-white text-center">
          <Package className="w-20 h-20 mx-auto mb-4" />
          <CardTitle className="text-3xl">Item Details</CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2"><Label className="text-lg">Item Name</Label><Input placeholder="White Board Marker (Black)" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Category</Label><Input placeholder="Stationery / Sports / Lab" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Quantity</Label><Input type="number" placeholder="500" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Unit Price</Label><Input placeholder="₹45" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Vendor</Label><Input placeholder="ABC Stationery Mart" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Low Stock Alert</Label><Input type="number" placeholder="50" className="h-14 text-lg" /></div>
          </div>

          <div className="flex justify-end gap-6 pt-8 border-t">
            <Button variant="outline" size="lg">Cancel</Button>
            <Button size="lg" className="gap-3 bg-gradient-to-r from-lime-600 to-green-600 px-12">
              <Package className="w-6 h-6" /> Add to Inventory
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}