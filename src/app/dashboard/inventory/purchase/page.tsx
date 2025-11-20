"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IndianRupee } from "lucide-react";

export default function NewPurchase() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 p-6">
      <h1 className="text-5xl font-bold text-center text-emerald-700">Record New Purchase</h1>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-4 border-emerald-300 rounded-3xl p-12">
        <div className="grid grid-cols-2 gap-12 text-center">
          <div>
            <p className="text-3xl text-gray-700">Total Purchases This Year</p>
            <p className="text-8xl font-bold text-emerald-700 mt-6">₹18.4 Lakh</p>
          </div>
          <div>
            <p className="text-3xl text-gray-700">Pending Approvals</p>
            <p className="text-8xl font-bold text-orange-700 mt-6">3</p>
          </div>
        </div>

        <div className="mt-16 space-y-8 max-w-2xl mx-auto">
          <Input placeholder="Item Name" className="h-16 text-xl" />
          <Input placeholder="Quantity" type="number" className="h-16 text-xl" />
          <Input placeholder="Price per unit" className="h-16 text-xl" />
          <Input placeholder="Vendor Name" className="h-16 text-xl" />
          <Button size="lg" className="w-full text-2xl py-8 gap-4 bg-gradient-to-r from-emerald-600 to-teal-600">
            <IndianRupee className="w-10 h-10" /> Record Purchase
          </Button>
        </div>
      </div>
    </div>
  );
}